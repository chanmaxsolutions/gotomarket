// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/common/header';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Go To Market - AI & Web Development Agency',
  description: 'We deliver cutting-edge web development and AI solutions that transform businesses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Header />
        <div className="bg-red-500 text-blue-500 p-4">Test Tailwind</div>

        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}