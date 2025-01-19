// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';



export const metadata: Metadata = {
  title: 'Go To Market - AI & Web Development Agency',
  description: 'We deliver cutting-edge web development and AI solutions that transform businesses.',
  icons: {
    icon: 'https://res.cloudinary.com/dqeujzydw/image/upload/v1737271850/Favicon-Dark_mzwgmd.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body >{children}</body>
    </html>
  );
}