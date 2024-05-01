'use client';
import Link from 'next/link';
import Icons from './ui/icons';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';

export default function DownloadCV() {
  const { theme } = useTheme();
  const cv_url =
    theme === 'dark'
      ? '/assets/cv/Diego-C-Silva-CV-EN-Dark.pdf'
      : theme === 'light'
        ? '/assets/cv/Diego-C-Silva-CV-EN-Light.pdf'
        : '/assets/cv/Diego-C-Silva-CV-EN-Light.pdf';

  return (
    <Link className={'grow'} href={cv_url} target="_blank">
      <Button
        type="button"
        variant={'secondary'}
        className="align-middle w-full"
      >
        Download CV
        <Icons.IcRoundDownloadForOffline className="size-4 ml-2" />
      </Button>
    </Link>
  );
}
