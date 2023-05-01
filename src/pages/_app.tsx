import '../../styles/globals.css'
import type { AppProps } from 'next/app'

import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-wrap-balancer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}