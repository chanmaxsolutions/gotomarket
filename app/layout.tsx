// src/app/layout.tsx
import type { Metadata } from 'next';
import Header from '@/components/common/header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Go To Market - AI & Web Development Agency',
  description: 'We deliver cutting-edge web development and AI solutions that transform businesses.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        {/* Add any head elements like meta tags, title, etc. here */}
      </head>
      <body>
        <Header />
        <main className="pt-20" suppressHydrationWarning>{children}</main>
      </body>
    </html>
  );
}
