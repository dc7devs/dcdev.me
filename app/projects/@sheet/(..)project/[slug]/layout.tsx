'use client';
import { ReactNode, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';

import { SheetScrollProvider } from '@/context/sheet-scroll-context';
import useMediaQuery from '@/hooks/use-media-query';

import { Sheet, SheetContent } from '@/components/ui/sheet';

export default function LayoutSheetProject({
  children
}: {
  children: ReactNode;
}) {
  const isWithScreen = useMediaQuery('(min-width: 1024px)');
  const router = useRouter();
  const sheetRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(
    (open: boolean) => {
      if (!open) {
        router.back();
      }
    },
    [router]
  );

  const side = !isWithScreen ? 'bottom' : 'right';

  return (
    <SheetScrollProvider sheetRef={sheetRef}>
      <Sheet defaultOpen={true} onOpenChange={handleClose}>
        <SheetContent
          ref={sheetRef}
          side={side}
          className="border-l border-input bg-white dark:bg-black overflow-auto"
        >
          {children}
        </SheetContent>
      </Sheet>
    </SheetScrollProvider>
  );
}
