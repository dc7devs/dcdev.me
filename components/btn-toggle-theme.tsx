'use client';
import { useTheme } from 'next-themes';
import Icons from '@/components/ui/icons';

import { Button } from '@/components/ui/button';

export default function ToggleThemeBtn() {
  const { theme, setTheme } = useTheme();

  function isDark() {
    return theme == 'dark';
  }

  return (
    <Button
      className="sm:m-0 align-middle backdrop-blur-sm rounded-full sm:rounded-md"
      variant={'outline'}
      size={'icon'}
      onClick={() => {
        setTheme(isDark() ? 'light' : 'dark');
      }}
    >
      {isDark() ? (
        <Icons.MoonStars className="size-5 md:size-[23px]" />
      ) : (
        <Icons.SunDim className="size-5 md:size-[23px]" />
      )}
    </Button>
  );
}
