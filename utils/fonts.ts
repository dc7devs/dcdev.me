import {
  Poppins,
  Roboto_Condensed,
  Righteous,
  Inter
} from 'next/font/google';

export const inter = Inter({
  weight: ['100', '200', '400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

export const poppins = Poppins({
  weight: ['100', '200', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const robotoCondensed = Roboto_Condensed({
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const righteous = Righteous({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
})