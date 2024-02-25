'use client';

import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export default function GoToSpecificRouteBtn({
  href,
  options,
  children,
  className
}: {
  href: string;
  options?: NavigateOptions | undefined;
  children: ReactNode;
  className?: string;
}) {
  const router = useRouter();

  return (
    <Button
      className={cn(className)}
      variant={'default'}
      onClick={() => router.push(href, { ...options })}
    >
      {children}
    </Button>
  );
}
