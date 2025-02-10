'use client';
import Link from 'next/link';
import Icons from './ui/icons';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';

export default function DownloadCV() {
  // const { theme } = useTheme();
  const cv_url = '/assets/cv/DIego-C-Silva-CV - Estágio.pdf'
    // theme === 'dark'
    //   ? '/assets/cv/Diego-C-Silva-CV-EN-Dark.pdf'
    //   : theme === 'light'
    //     ? '/assets/cv/Diego-C-Silva-CV-EN-Light.pdf'
    //     : '/assets/cv/Diego-C-Silva-CV-EN-Light.pdf';

  return (
    <Link className={'grow'} href={cv_url} target="_blank">
      <Button
        type="button"
        variant={'secondary'}
        className="w-full align-middle"
      >
        Download CV
        <Icons.IcRoundDownloadForOffline className="ml-2 size-4" />
      </Button>
    </Link>
  );
}
