import { cn } from '@/lib/utils';
import BackButton from '@/components/go-back-button';
import Icons from '@/components/ui/icons';

import { format, parseISO } from 'date-fns';

import { MDXContent } from '@/components/mdx-content';
import { Note, notes } from '@/.velite/index';

export default function NotePage({
  params: { slug }
}: {
  params: { slug: string };
}) {
  const note = notes.find(
    (note: Note) =>
      `/studying/notes/${note.slug.trim()}` == `/studying/notes/${slug.trim()}`
  );

  if (!note) return;

  return (
    <div className="w-full pt-14 sm:pt-10">
      <article
        className={cn(
          'max-w-3xl mx-auto prose prose-neutral dark:prose-invert relative',
          'prose-a:underline-offset-2 prose-a:font-normal prose-a:transition-colors prose-a:ease-linear prose-a:text-neutral-300' // a
        )}
      >
        <BackButton className="absolute p-0 -top-11 -left-1 lg:top-8 lg:-left-24 xl:-left-32 text-muted-foreground hover:text-foreground flex align-middle gap-1">
          <Icons.MaterialSymbolsArrowLeftAltRounded className="size-4" />
          <small className="text-base">back</small>
        </BackButton>

        <div className="mb-8">
          <time dateTime={note.created_at} className="mb-1 text-sm">
            {format(parseISO(note.created_at), 'LLL d, yyyy')}
          </time>
          <h1>{note.title}</h1>
        </div>

        <MDXContent code={note.content} />
      </article>
    </div>
  );
}
