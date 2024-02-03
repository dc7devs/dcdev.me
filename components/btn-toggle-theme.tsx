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
        <Icons.MoonStars className="w-[20px] h-[20px] md:w-[23px] md:h-[23px]" />
      ) : (
        <Icons.SunDim className="w-[20px] h-[20px] md:w-[23px] md:h-[23px]" />
      )}
    </Button>
  );
}
