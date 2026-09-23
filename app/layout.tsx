import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Papá Gostoso · Receitas Acolhedoras & Tutoriais com Beagle',
  description: 'O portal acolhedor de receitas artesanais e tutoriais práticos da Nika, com o mascote Beagle na Moeda Dourada, receitas clássicas brasileiras, italianas, francesas, japonesas, hambúrgueres e sobremesas.',
  openGraph: {
    title: 'Papá Gostoso · Receitas Acolhedoras & Tutoriais com Beagle',
    description: 'O portal acolhedor de receitas artesanais e tutoriais práticos da Nika, com o mascote Beagle na Moeda Dourada, receitas clássicas brasileiras, italianas, francesas, japonesas, hambúrgueres e sobremesas.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Papá Gostoso · Receitas Acolhedoras & Tutoriais com Beagle',
    description: 'O portal acolhedor de receitas artesanais e tutoriais práticos da Nika, com o mascote Beagle na Moeda Dourada, receitas clássicas brasileiras, italianas, francesas, japonesas, hambúrgueres e sobremesas.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
