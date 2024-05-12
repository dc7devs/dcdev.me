'use client';
import { useTheme } from 'next-themes';

import Icons from '@/components/ui/icons';
import { Button } from '@/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './ui/dropdown-menu';

export default function ToggleThemeBtn() {
  const { theme: currentTheme, setTheme } = useTheme();

  type tTheme = 'light' | 'dark' | 'system';
  const iconTheme = {
    dark: (
      <Icons.MoonStars className="size-5 text-foreground/80 md:size-[23px]" />
    ),
    light: (
      <Icons.SunDim className="size-5 text-foreground/80 md:size-[23px]" />
    ),
    system: (
      <Icons.BxsBrush className="size-5 text-foreground/80 md:size-[23px]" />
    )
  };

  const SelectThemeMenuItem = ({ theme }: { theme: tTheme }) => (
    <DropdownMenuItem onClick={() => setTheme(theme)} className="space-x-1">
      {theme === 'dark' && (
        <>
          <Icons.MoonStars className="size-4 text-foreground/80 md:size-5" />{' '}
          <span className="font-medium">Dark</span>
        </>
      )}
      {theme === 'light' && (
        <>
          <Icons.SunDim className="size-4 text-foreground/80 md:size-5" />{' '}
          <span className="font-medium">Light</span>
        </>
      )}

      {theme === 'system' && (
        <>
          <Icons.BxsBrush className="size-4 text-foreground/80 md:size-5" />{' '}
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
          {currentTheme ? (
            iconTheme[currentTheme as tTheme]
          ) : (
            <Icons.BxsBrush className="size-5 text-foreground/80 md:size-[23px]" />
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
