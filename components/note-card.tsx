'use client';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Note } from '@/.contentlayer/generated';
import Icons from './ui/icons';
import { cn } from '@/lib/utils';

import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function NoteCard({ title, createdAt, description }: Note) {
  const { theme } = useTheme();

  return (
    <Card
      className={
        'flex flex-col relative w-full min-h-full rounded-sm border-input md:hover:scale-105 md:transition md:duration-100 md:ease-linear cursor-pointer text-balance bg-background'
      }
    >
      <CardHeader className="pb-2 pt-0 px-0">
        <div className="relative w-full h-24 overflow-hidden rounded-t-sm">
          <Image
            className={
              'object-none overflow-hidden object-left-bottom h-full w-full brightness-50'
            }
            src={cn(
              theme === 'dark'
                ? 'https://res.cloudinary.com/dyxtcsnna/image/upload/v1707977012/dcdev/pattern-studying-note-dark_cv33kj.png'
                : 'https://res.cloudinary.com/dyxtcsnna/image/upload/v1707977013/dcdev/pattern-studying-note-light_cofsty.png'
            )}
            alt="Preview project"
            fill
          />
        </div>
      </CardHeader>

      <Icons.PhBookmarkSimpleFill className="absolute -top-1.5 right-2 size-6" />

      <CardContent className="grow px-3 pb-1.5 space-y-1">
        <CardTitle>{title}</CardTitle>

        <CardDescription className="line-clamp-2 text-ellipsis font-normal text-accent-foreground/80">
          {description}
        </CardDescription>
      </CardContent>

      <CardFooter className="flex items-center justify-between pb-2 px-3 font-normal">
        <small className="text-sm text-accent-foreground/60">
          {formatDistanceToNow(new Date(createdAt), {
            locale: ptBR,
            addSuffix: true
          })}
        </small>
      </CardFooter>
    </Card>
  );
}
