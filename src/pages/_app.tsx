import '../../styles/globals.css'
import type { AppProps } from 'next/app'

import Bg from '../components/background'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Bg>
      <Component {...pageProps} />
    </Bg>
  )
}