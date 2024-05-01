import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

const TechBadge = (props: PropsWithChildren & { href: string }) => {
  return (
    <a
      className={cn(
        'font-normal text-sm px-1 py-0 ring-1 ring-input inline-flex items-center no-underline rounded-sm space-x-1 align-middle',
        'ring-input dark:ring-neutral-700 bg-secondary text-primary'
      )}
      target="__blank"
      {...props}
    />
  );
};

export default TechBadge;
