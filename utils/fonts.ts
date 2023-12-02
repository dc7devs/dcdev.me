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
})

const robotoCondensed = Roboto_Condensed({
  variable: '--font-roboto-condensed',
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
})

const righteous = Righteous({
  variable: '--font-righteous',
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight: ['100', '200', '400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})