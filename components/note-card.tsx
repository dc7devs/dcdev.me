'use client';
import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { PhBookmarkSimpleFill } from './ui/icons';

import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Badge } from './ui/badge';
import { Note } from '@/.velite';

export function NoteCard({ title, created_at, description, tags }: Note) {
  return (
    <Card
      className={
        'border-input bg-background relative flex min-h-full w-full cursor-pointer flex-col rounded-xs text-balance md:transition md:duration-100 md:ease-linear md:hover:-translate-y-3'
      }
    >
      <CardHeader className="px-0 pt-0 pb-2">
        <div className="relative h-24 w-full overflow-hidden rounded-t-sm">
          <Image
            className={
              'hidden h-full w-full overflow-hidden object-none object-left-bottom brightness-50 dark:block'
            }
            src={
              'https://res.cloudinary.com/dyxtcsnna/image/upload/v1707977012/dcdev/pattern-studying-note-dark_cv33kj.png'
            }
            alt="Preview project"
            height={250}
            width={300}
          />
          <Image
            className={
              'h-full w-full overflow-hidden object-none object-left-bottom brightness-50 dark:hidden'
            }
            src={
              'https://res.cloudinary.com/dyxtcsnna/image/upload/v1707977013/dcdev/pattern-studying-note-light_cofsty.png'
            }
            alt="Preview project"
            height={250}
            width={300}
          />
        </div>
      </CardHeader>

      <PhBookmarkSimpleFill className="absolute -top-1.5 right-2 size-6" />

      <CardContent className="grow space-y-1 px-3 pb-1.5">
        <CardTitle>{title}</CardTitle>

        <CardDescription className="text-accent-foreground/80 line-clamp-2 font-normal text-ellipsis">
          {description}
        </CardDescription>

        <div className="my-3 inline-flex flex-wrap gap-1.5">
          {tags.map((tool: string, index: number) => (
            <Badge
              key={index}
              variant={'secondary'}
              className="text-accent-foreground ring-accent-foreground pointer-events-none border-none px-1 py-0 ring-1 brightness-75"
            >
              {tool}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between px-3 pb-2 font-normal">
        <time className="text-accent-foreground/60 text-sm">
          {formatDistanceToNow(new Date(created_at), {
            locale: ptBR,
            addSuffix: true
          })}
        </time>
      </CardFooter>
    </Card>
  );
}
