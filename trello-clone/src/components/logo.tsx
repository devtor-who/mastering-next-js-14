import Image from 'next/image';
import Link from 'next/link';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

const headingFont = localFont({
  src: '../../public/fonts/font.woff2',
});

function Logo() {
  return (
    <Link href={`/`}>
      <figure className="hover:opacity-75 transition items-center gap-x-1 pb-1 hidden md:flex">
        <Image src={`/logo.svg`} alt="로고" width={36} height={28} />
        <figcaption className={cn('text-lg text-neutral-700 pt-1', headingFont.className)}>Trelloky</figcaption>
      </figure>
    </Link>
  );
}

export default Logo;
