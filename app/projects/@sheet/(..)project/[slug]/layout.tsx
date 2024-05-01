'use client';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { SheetScrollProvider } from '@/context/sheet-scroll-context';
import { useRouter } from 'next/navigation';
import { ReactNode, useRef } from 'react';

export default function LayoutSheetProject({
  children
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const sheetRef = useRef<HTMLDivElement>(null);

  return (
    <SheetScrollProvider sheetRef={sheetRef}>
      <Sheet
        defaultOpen={true}
        onOpenChange={(open) => {
          if (!open) {
            router.back();
          }
        }}
      >
        <SheetContent
          ref={sheetRef}
          className="border-l border-input bg-white dark:bg-black overflow-auto"
        >
          {children}
        </SheetContent>
      </Sheet>
    </SheetScrollProvider>
  );
}
