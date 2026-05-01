import { cn } from '@/lib/utils';
import { IonIosHammer } from './ui/icons';

export default function Unavailable({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'text-foreground/60 absolute top-0 left-0 flex h-full w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-white/50 select-none dark:bg-black/50',
        className
      )}
      style={{ backdropFilter: 'blur(2px)' }}
    >
      <IonIosHammer />
      <small>
        <strong>unavailable, building...</strong>
      </small>
    </div>
  );
}
