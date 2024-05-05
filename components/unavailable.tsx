import { cn } from '@/lib/utils';
import Icons from './ui/icons';

export default function Unavailable({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'absolute left-0 top-0 flex h-full w-full cursor-not-allowed select-none items-center justify-center gap-2 rounded-xl bg-white/50 text-foreground/60 dark:bg-black/50',
        className
      )}
      style={{ backdropFilter: 'blur(2px)' }}
    >
      <Icons.IonIosHammer />
      <small>
        <strong>unavailable, building...</strong>
      </small>
    </div>
  );
}
