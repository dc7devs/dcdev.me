import './globals.css';
import { Metadata } from 'next';
import { CustomLayout } from '@/components/custom-root-layout';
import React from 'react';

import { cn } from '@/lib/utils';

import {
  Poppins,
  Roboto_Condensed,
  Righteous,
  Inter,
  Montserrat
} from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  weight: ['100', '200', '400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
});

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['100', '200', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

const robotoCondensed = Roboto_Condensed({
  variable: '--font-roboto-condensed',
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

const righteous = Righteous({
  variable: '--font-righteous',
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight: ['100', '200', '400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Diego C. Silva',
  description: 'Personal website'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={cn(
        inter.variable,
        poppins.variable,
        robotoCondensed.variable,
        righteous.variable,
        montserrat.variable
      )}
      lang="en"
    >
      {/* <html lang="en"> */}
      <body>
        <CustomLayout>{children}</CustomLayout>
      </body>
    </html>
  );
}
