import '../styles/globals.css';
import React from 'react';
import Shell from '../components/Shell';
import { Hedvig_Letters_Serif, Nunito_Sans } from 'next/font/google';

const hedvig = Hedvig_Letters_Serif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hedvig',
});

const nunito_sans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito-sans',
});

export const metadata = {
  title: 'Klue Compete Agent',
  description: 'AI-first competitive insights platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${hedvig.variable} ${nunito_sans.variable}`}>
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
} 