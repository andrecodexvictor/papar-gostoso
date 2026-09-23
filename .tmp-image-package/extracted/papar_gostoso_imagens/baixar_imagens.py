#!/usr/bin/env python3
# Baixa uma fotografia real e licenciada do Wikimedia Commons para cada receita.
# Requer: pip install requests pillow

import csv, io, json, os, re, time, unicodedata
from pathlib import Path
import requests
from PIL import Image

HERE = Path(__file__).resolve().parent
RECIPES = json.loads((HERE / "receitas.json").read_text(encoding="utf-8"))
OUT = HERE / "imagens"
OUT.mkdir(exist_ok=True)
CSV = HERE / "creditos_imagens.csv"

API = "https://commons.wikimedia.org/w/api.php"
HEADERS = {"User-Agent": "PaparGostosoImageFetcher/1.0 (personal website image curation)"}

def safe_filename(name):
    # mantém o nome visual da receita, removendo apenas caracteres proibidos no Windows
    return re.sub(r'[<>:"/\\|?*]', '-', name).strip().rstrip('.')

def clean_query(title):
    q = title
    replacements = {
        " fofinho":"", " de panela":"", " aveludado":"", " cremoso":"", " cremosa":"",
        " caseiro":"", " caseira":"", " artesanal":"", " autêntica":"", " autêntico":"",
        " perfeito":"", " perfeita":"", " clássico":"", " clássica":"", " fácil":"",
        " suculento":"", " suculenta":"", " crocante":"", " crocantes":"", " dourado":"",
        " dourados":"", " reconfortante":"", " tradicional":"", " perfumado":"", " aromático":"",
        " de domingo":"", " de inverno":"", " de festa":"", " da família":"", " de vó":"",
        " refrescante":"", " folhado":"", " sedoso":"", " rápida":"", " simples":""
    }
    for a,b in replacements.items():
        q = q.replace(a,b)
    q = re.sub(r"\s*\([^)]*\)", "", q)
    return q.strip()

def search_commons(query, limit=15):
    params = {
        "action":"query","format":"json","generator":"search",
        "gsrsearch": query, "gsrnamespace":6, "gsrlimit":limit,
        "prop":"imageinfo","iiprop":"url|mime|extmetadata"
    }
    r = requests.get(API, params=params, headers=HEADERS, timeout=30)
    r.raise_for_status()
    pages = list(r.json().get("query",{}).get("pages",{}).values())
    return pages

def score(page, title):
    t = page.get("title","").lower()
    toks = [x for x in re.findall(r"\w+", clean_query(title).lower(), flags=re.UNICODE) if len(x)>2]
    s = sum(3 for x in toks if x in t)
    ii = (page.get("imageinfo") or [{}])[0]
    mime = ii.get("mime","")
    if mime in ("image/jpeg","image/png","image/webp"): s += 3
    meta = ii.get("extmetadata",{})
    desc = (meta.get("ImageDescription",{}).get("value","") or "").lower()
    s += sum(1 for x in toks if x in desc)
    # prioriza fotografias e penaliza desenhos/logos
    if "photo" in desc or "fotograf" in desc: s += 2
    if any(x in desc for x in ("illustration","drawing","logo","svg","icon")): s -= 5
    return s

def pick(title):
    queries = [clean_query(title), clean_query(title)+" food", clean_query(title)+" dish"]
    seen = {}
    for q in queries:
        try:
            for p in search_commons(q):
                seen[p.get("pageid", p.get("title"))] = p
        except Exception:
            pass
    pages = list(seen.values())
    pages.sort(key=lambda p: score(p,title), reverse=True)
    for p in pages:
        ii = (p.get("imageinfo") or [{}])[0]
        if ii.get("mime") in ("image/jpeg","image/png","image/webp") and ii.get("url"):
            return p
    return None

rows=[]
for idx,title in enumerate(RECIPES,1):
    base = safe_filename(title)
    dest = OUT / f"{base}.jpg"
    print(f"[{idx}/{len(RECIPES)}] {title}")
    if dest.exists() and dest.stat().st_size > 10_000:
        print("  já existe; pulando")
        continue
    p = pick(title)
    if not p:
        print("  sem resultado")
        rows.append([title,"","","","SEM RESULTADO"])
        continue
    ii = p["imageinfo"][0]
    try:
        data = requests.get(ii["url"], headers=HEADERS, timeout=60).content
        im = Image.open(io.BytesIO(data)).convert("RGB")
        # padroniza para web sem distorção; máximo 1600 px
        im.thumbnail((1600,1600), Image.Resampling.LANCZOS)
        im.save(dest, "JPEG", quality=88, optimize=True, progressive=True)
        meta = ii.get("extmetadata",{})
        artist = re.sub("<[^>]+>","",meta.get("Artist",{}).get("value","") or "")
        lic = meta.get("LicenseShortName",{}).get("value","") or ""
        page_url = ii.get("descriptionurl","")
        rows.append([title, dest.name, page_url, artist, lic])
        print("  salvo:", dest.name)
    except Exception as e:
        print("  erro:", e)
        rows.append([title,"",ii.get("descriptionurl",""),"","ERRO: "+str(e)])
    time.sleep(0.15)

with CSV.open("w",encoding="utf-8-sig",newline="") as f:
    w=csv.writer(f)
    w.writerow(["receita","arquivo","pagina_fonte","autor","licenca"])
    w.writerows(rows)

print("\nConcluído. Imagens em:", OUT)
print("Créditos/licenças em:", CSV)
