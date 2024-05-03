import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

const TechBadge = (props: PropsWithChildren & { href: string }) => {
  return (
    <a
      className={cn(
        'inline-flex items-center space-x-1 rounded-sm px-1 py-0 align-middle text-sm font-normal no-underline ring-1 ring-input',
        'bg-secondary text-primary ring-input dark:ring-neutral-700'
      )}
      target="__blank"
      {...props}
    />
  );
};

export default TechBadge;
