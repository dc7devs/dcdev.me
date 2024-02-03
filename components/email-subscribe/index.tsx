import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '../ui/input';
import Icons from '../ui/icons';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import Unavailable from '../unavailable';

// TODO: implemetar serviço de email marketing

export default function EmailSubscribe({ className }: { className?: string }) {
  return (
    <Card className={cn('relative', className)}>
      <Unavailable />

      <CardHeader>
        <CardTitle className="flex align-middle text-primary">
          <Icons.EmailSubscribe className="size-4 mr-2" />
          Stay up to date
        </CardTitle>

        <CardDescription>
          Get notified when I publish something new, and unsubscribe at any
          time.
        </CardDescription>
      </CardHeader>

      <CardContent className="inline-flex w-full gap-2">
        <Input type="email" placeholder={'E-mail'} />

        <Button type="submit" size={'icon'} className="px-2">
          <Icons.MingcuteSendPlaneFill className="size-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
