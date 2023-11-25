import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site';

const noto_Sans_KR = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [{ href: '/logo.svg', url: '/logo.svg' }],
};

export default function RootLayout({
  children, //
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-[100dvh]" lang="ko">
      <body className={`${noto_Sans_KR.className} h-full`}>{children}</body>
    </html>
  );
}
