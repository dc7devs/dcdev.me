import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

const TechBadge = (props: PropsWithChildren & { href: string }) => {
  return (
    <a
      className={cn(
        'ring-input inline-flex items-center space-x-1 rounded-xs px-1 py-0 align-middle text-sm font-normal no-underline ring-1',
        'bg-secondary text-primary ring-input dark:ring-neutral-700'
      )}
      target="__blank"
      {...props}
    />
  );
};

export default TechBadge;
