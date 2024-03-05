import localFont from 'next/font/local';

export const inter = localFont({
  src: [
    {
      path: './inter/Inter-Thin.ttf',
      weight: '100',
      style: 'normal'
    },
    {
      path: './inter/Inter-ExtraLight.ttf',
      weight: '200',
      style: 'normal'
    },
    {
      path: './inter/Inter-Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './inter/Inter-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './inter/Inter-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './inter/Inter-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './inter/Inter-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './inter/Inter-ExtraBold.ttf',
      weight: '800',
      style: 'normal'
    },
    {
      path: './inter/Inter-Black.ttf',
      weight: '900',
      style: 'normal'
    }
  ],
  variable: '--font-inter'
});

export const poppins = localFont({
  src: [
    {
      path: './poppins/Poppins-Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './poppins/Poppins-LightItalic.ttf',
      weight: '300',
      style: 'italic'
    },
    {
      path: './poppins/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './poppins/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './poppins/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    }
  ],
  variable: '--font-poppins'
});

export const righteous = localFont({
  src: './righteous/Righteous-Regular.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-righteous'
});

// const inter = Inter({
//   variable: '--font-inter',
//   weight: ['100', '200', '400', '700'],
//   style: ['normal'],
//   subsets: ['latin'],
//   display: 'swap'
// });

// const poppins = Poppins({
//   variable: '--font-poppins',
//   weight: ['100', '200', '400', '700'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
//   display: 'swap'
// });

// const robotoCondensed = Roboto_Condensed({
//   variable: '--font-roboto-condensed',
//   weight: ['300', '400', '700'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
//   display: 'swap'
// });

// const righteous = Righteous({
//   variable: '--font-righteous',
//   weight: ['400'],
//   style: ['normal'],
//   subsets: ['latin'],
//   display: 'swap'
// });

// const montserrat = Montserrat({
//   variable: '--font-montserrat',
//   weight: ['100', '200', '400', '700'],
//   style: ['normal'],
//   subsets: ['latin'],
//   display: 'swap'
// });
