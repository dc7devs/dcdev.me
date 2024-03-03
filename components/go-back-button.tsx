'use client';

import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export default function BackButton({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  const router = useRouter();

  return (
    <Button className={cn(className)} variant={'link'} onClick={router.back}>
      {children}
    </Button>
  );
}
