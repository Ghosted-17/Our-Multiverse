import type {Metadata} from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css'; // Global styles

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Gilded Obsidian | Personal Chronicles',
  description: 'A refined personal archive of moments, connections, and stories.',
  openGraph: {
    title: 'Gilded Obsidian | Personal Chronicles',
    description: 'A refined personal archive of moments, connections, and stories.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gilded Obsidian | Personal Chronicles',
    description: 'A refined personal archive of moments, connections, and stories.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} bg-[#0D0D0F] text-[#F2F1ED] font-sans min-h-screen selection:bg-[#C4A77D]/30 selection:text-[#F2F1ED]`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
