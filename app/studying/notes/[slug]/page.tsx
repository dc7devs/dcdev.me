import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import BackButton from '@/components/go-back-button';
import Icons from '@/components/ui/icons';

import { format, parseISO } from 'date-fns';

import { allNotes } from '@/.contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';

import { Children } from 'react';

export default function NotePage({
  params: { slug }
}: {
  params: { slug: string };
}) {
  const formattedSlug = `/studying/notes/${slug}`;

  const note = allNotes.find(
    (note) => note.slug.trim() == formattedSlug.trim()
  );

  if (!note) return;
  const Content = getMDXComponent(note.body.code);

  return (
    <div className="w-full pt-14 sm:pt-10">
      <article
        className={cn(
          'max-w-3xl mx-auto prose prose-quoteless prose-neutral dark:prose-invert relative',
          'prose-a:underline-offset-2 prose-a:font-normal prose-a:transition-colors prose-a:ease-linear prose-a:text-neutral-300' // a
        )}
      >
        <BackButton className="absolute p-0 -top-11 -left-1 lg:top-8 lg:-left-24 xl:-left-32 text-muted-foreground hover:text-foreground flex align-middle gap-1">
          <Icons.MaterialSymbolsArrowLeftAltRounded className="size-4" />
          <small className="text-base">back</small>
        </BackButton>

        <div className="mb-8">
          <time dateTime={note.createdAt} className="mb-1 text-sm">
            {format(parseISO(note.createdAt), 'LLL d, yyyy')}
          </time>
          <h1>{note.title}</h1>
        </div>

        <Content components={components} />
      </article>
    </div>
  );
}

const components = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Image: (props: any) => {
    return <Image className="rounded-md" {...props} />;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  a: (props: any) => {
    const href = props.href;

    if (href.startsWith('/')) {
      return (
        <Link href={href} {...props.props}>
          {props.children}
        </Link>
      );
    }

    if (href.startsWith('#')) {
      return <a {...props.props} />;
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} />;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  h1: (props: any) => {
    return <h2 {...props} />;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  code: (props: any) => {
    const isTextOnly = Children.toArray(props.children).every(
      (child: unknown) => typeof child === 'string'
    );

    const finalClassName = isTextOnly
      ? `${props.className} before:invisible after:invisible bg-neutral-200 dark:bg-neutral-800 text-orange-400 font-light py-px px-1 rounded`
      : props.className;

    return <code className={finalClassName} {...props} />;
  }
};
