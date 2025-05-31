'use client';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './ui/dropdown-menu';
import { MoonStars, SunDim, BxsBrush } from './ui/icons';
import { useEffect, useState } from 'react';

export default function ToggleThemeBtn() {
  const [mounted, setMounted] = useState(false);
  const { theme: currentTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  type tTheme = 'light' | 'dark' | 'system';
  const iconTheme = {
    dark: (
      <MoonStars className="size-5 text-foreground/80 md:size-[23px]" />
    ),
    light: (
      <SunDim className="size-5 text-foreground/80 md:size-[23px]" />
    ),
    system: (
      <BxsBrush className="size-5 text-foreground/80 md:size-[23px]" />
    )
  };

  const SelectThemeMenuItem = ({ theme }: { theme: tTheme }) => (
    <DropdownMenuItem onClick={() => setTheme(theme)} className="space-x-1">
      {theme === 'dark' && (
        <>
          <MoonStars className="size-4 text-foreground/80 md:size-5" />{' '}
          <span className="font-medium">Dark</span>
        </>
      )}
      {theme === 'light' && (
        <>
          <SunDim className="size-4 text-foreground/80 md:size-5" />{' '}
          <span className="font-medium">Light</span>
        </>
      )}

      {theme === 'system' && (
        <>
          <BxsBrush className="size-4 text-foreground/80 md:size-5" />{' '}
          <span className="font-medium">System</span>
        </>
      )}
    </DropdownMenuItem>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="rounded-full bg-background/60 align-middle backdrop-blur-sm sm:m-0 sm:rounded-md"
          variant={'outline'}
          size={'icon'}
          name="change theme button"
        >
          {mounted && currentTheme ? (
            iconTheme[currentTheme as tTheme]
          ) : (
            <BxsBrush className="size-5 text-foreground/80 md:size-[23px]" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <SelectThemeMenuItem theme={'dark'} />
        <SelectThemeMenuItem theme={'light'} />
        <SelectThemeMenuItem theme={'system'} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}