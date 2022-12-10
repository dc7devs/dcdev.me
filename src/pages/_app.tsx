import '../../styles/globals.css'
import type { AppProps } from 'next/app'

import Bg from '../components/background'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
        <Component {...pageProps} />
    </ThemeProvider>
  )
}