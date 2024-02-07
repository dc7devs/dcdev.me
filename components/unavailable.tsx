import { cn } from '@/lib/utils';
import Icons from './ui/icons';

export default function Unavailable({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex items-center justify-center gap-2 absolute top-0 left-0 w-full h-full bg-white/50 dark:bg-black/50 text-foreground/60 rounded-xl select-none cursor-not-allowed',
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
