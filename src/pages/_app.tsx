import '../../styles/globals.css'
import type { AppProps } from 'next/app'

import B from '../components/background'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <B>
      <Component {...pageProps} />
    </B>
  )
}