'use client';
import { ReactNode } from 'react';

import NextProgress from 'next-progress';
import { ThemeProvider } from 'next-themes';

import Header from './header';
import Footer from './footer';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@/lib/query-client';

import { Analytics } from '@vercel/analytics/react';
import { Toaster } from './ui/toaster';

export function CustomLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Analytics />

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

      <Toaster />
    </>
  );
}
