import './globals.css';
import { Metadata } from 'next';
import { CustomLayout } from '@/components/custom-root-layout';
import React from 'react';

import { inter, poppins, righteous } from '@/lib/fonts';
import { cn } from '@/lib/utils';

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
      className={cn(inter.variable, poppins.variable, righteous.variable)}
      lang="en"
    >
      <body>
        <CustomLayout>{children}</CustomLayout>
      </body>
    </html>
  );
}
