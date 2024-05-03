'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
// import { Button } from './ui/button';

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer
      className={
        'mx-auto mb-5 flex w-full px-4 font-inter text-sm sm:px-10 md:grid md:grid-cols-2 lg:grid-cols-12 2xl:flex 2xl:max-w-screen-2xl'
      }
    >
      <p
        className={cn(
          'text-black/60 dark:text-white/50 md:col-span-full',
          pathname == '/' && 'lg:col-start-2'
        )}
      >
        <Link
          href={'https://creativecommons.org/licenses/by-nc-sa/4.0/'}
          target="_blank"
          className="underline"
        >
          CC BY-NC-SA 4.0
        </Link>{' '}
        {new Date().getFullYear()}-PRESENT ©{' '}
        <Link href={'https://dcdev.me'}>dc.devs</Link>
      </p>

      {/* <Button className="h-6 px-2 md:col-start-11">Call me</Button> CTO (contact modal)*/}
    </footer>
  );
}
