'use client';
import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

import Header from './header';
import Footer from './footer';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@/lib/query-client';

import { Analytics } from '@vercel/analytics/react';
import { Toaster } from './ui/toaster';

export function CustomLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Analytics />

      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <QueryClientProvider client={queryClient}>
          <Header />

          <main
            className={
              'mx-auto mt-5 size-auto px-4 pb-7 sm:px-10 2xl:mx-auto 2xl:max-w-screen-2xl'
            }
          >
            <>{children}</>
          </main>

          <Footer />
        </QueryClientProvider>
      </ThemeProvider>

      <Toaster />
    </div>
  );
}
