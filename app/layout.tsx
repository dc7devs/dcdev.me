import './globals.css';
import { Metadata } from 'next';
import { LayoutDefault } from './components/layout-default';

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
            <body>
                <LayoutDefault>
                    {children}
                </LayoutDefault>
            </body>
        </html>
    )
}