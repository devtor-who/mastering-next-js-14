import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Trelloky - 협업 및 프로젝트 관리',
  description:
    '무료 팀 협업 툴로 시작하여 필요에 따라 확장 가능한 프리미엄 플랜을 제공합니다. 실시간 협업과 통합된 리포팅 도구로 프로젝트 관리를 한 단계 업그레이드하세요',
};

export default function RootLayout({
  children, //
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-[100dvh]" lang="ko">
      <body className={`${inter.className} h-full`}>{children}</body>
    </html>
  );
}
