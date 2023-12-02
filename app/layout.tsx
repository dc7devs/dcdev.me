import './globals.css';
import { Metadata } from 'next';
import { LayoutDefault } from '@/components/layout-default';

import { cn } from "@/lib/utils";
// import { inter, montserrat, poppins, righteous, robotoCondensed } from '@/utils/fonts';

export const metadata: Metadata = {
    title: 'Diego C. Silva',
    description: 'Personal website',
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt_BR">
            {/* <body className={cn(inter.variable, poppins.variable, robotoCondensed.variable, righteous.variable, montserrat.variable)}> */}
            <body>
                <LayoutDefault>
                    {children}
                </LayoutDefault>
            </body>
        </html>
    )
}