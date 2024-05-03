import { cn } from '@/lib/utils';

export default function LiveStatus({
  status,
  className
}: {
  status:
    | 'to_begin'
    | 'doing'
    | 'progressing'
    | 'finishing'
    | 'done'
    | 'no_started'
    | 'in_progress';
  className?: string;
}) {
  const statusColorMap = {
    no_started: ['bg-stone-400', 'bg-stone-500'],
    to_begin: ['bg-stone-400', 'bg-stone-500'],
    doing: ['bg-orange-400', 'bg-orange-500'],
    in_progress: ['bg-amber-400', 'bg-amber-500'],
    progressing: ['bg-yellow-400', 'bg-yellow-500'],
    finishing: ['bg-lime-400', 'bg-lime-500'],
    done: ['bg-green-400', 'bg-green-500']
  };

  return (
    <span className={cn('relative ml-auto flex size-2', className)}>
      <span
        className={cn(
          'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
          statusColorMap[status][0]
        )}
      ></span>
      <span
        className={cn(
          'inline-flex size-2 rounded-full',
          statusColorMap[status][1]
        )}
      ></span>
    </span>
  );
}
