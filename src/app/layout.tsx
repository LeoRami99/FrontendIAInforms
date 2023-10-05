// app/layout.tsx
import {Providers} from "./providers/provider";
import type { Metadata } from 'next'
import './globals.css';

export const metadata: Metadata = {
  title: 'InformAI',
  description: 'Generated by create next app',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="es" className='dark'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}