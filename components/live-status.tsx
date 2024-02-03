import { cn } from '@/lib/utils';

export default function LiveStatus({
  status,
  className
}: {
  status: 'to_begin' | 'doing' | 'progressing' | 'finishing';
  className?: string;
}) {
  const statusColorMap = {
    to_begin: ['bg-gray-600', 'bg-gray-700'],
    doing: ['bg-green-600', 'bg-green-700'],
    progressing: ['bg-yellow-600', 'bg-yellow-700'],
    finishing: ['bg-lime-600', 'bg-lime-700']
  };

  return (
    <span className={cn('relative flex size-2 ml-auto', className)}>
      <span
        className={cn(
          'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
          statusColorMap[status][0]
        )}
      ></span>
      <span
        className={cn(
          'inline-flex rounded-full size-2',
          statusColorMap[status][1]
        )}
      ></span>
    </span>
  );
}
