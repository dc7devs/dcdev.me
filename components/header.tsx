'use client';
import Link from 'next/link';
// import Image from 'next/image';
import { cn } from '@/lib/utils';

import NavBar from './navbar';
import { Logotipo } from './logotipo';
import { useCallback, useEffect, useRef, useState } from 'react';

export default function Header() {
  const [didScroll, setDidiScroll] = useState(false);
  const lastScrollY = useRef(0);

  const onScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY.current && currentScrollY > 0) {
      setDidiScroll(true);
    } else {
      setDidiScroll(false);
    }

    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return (
    <header
      className={cn(
        'flex h-auto w-full pt-5 md:px-0',
        didScroll && 'sticky top-0 z-50'
      )}
    >
      <div
        className={
          'flex w-full items-center justify-between px-4 py-2 sm:gap-5 sm:px-10 sm:py-0 2xl:mx-auto 2xl:max-w-screen-2xl'
        }
      >
        <Link href="/" aria-label="Logotipo dcdevs">
          {!didScroll && <Logotipo />}
        </Link>

        <NavBar didScroll={didScroll} />
      </div>
    </header>
  );
}
