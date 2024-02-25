'use client';
import { ReactNode } from 'react';

import NextProgress from 'next-progress';
import { ThemeProvider } from 'next-themes';

import Header from './header';
import Footer from './footer';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@/lib/query-client';

import Script from 'next/script';

export function CustomLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Script
        async
        src="http://localhost:3000/script.js"
        data-website-id="75c5f4b7-42ee-46b5-b592-8ee8d5711e9d"
      />
      <ThemeProvider attribute="class">
        <QueryClientProvider client={queryClient}>
          <NextProgress color="rgb(139 92 246)" delay={500} />

          <Header />

          <main
            className={
              'size-auto px-4 pb-7 sm:px-10 mt-5 mx-auto 2xl:max-w-screen-2xl 2xl:mx-auto'
            }
          >
            {children}
          </main>

          <Footer />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
