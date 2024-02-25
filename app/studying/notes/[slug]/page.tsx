import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { allNotes } from '@/.contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';

import BackButton from '@/components/go-back-button';
import Icons from '@/components/ui/icons';

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
    <div className="w-full pt-14 sm:pt-10 ">
      <article className="max-w-3xl mx-auto prose prose-zinc dark:prose-invert prose-p:leading-normal relative">
        <BackButton className="absolute -top-11 -left-1 lg:top-8 lg:-left-24 xl:-left-32 text-muted-foreground hover:text-foreground">
          <Icons.PhArrowCircleLeftDuotone className="size-5/6 lg:size-3/4" />
        </BackButton>

        <div className="mb-8">
          <time dateTime={note.createdAt} className="mb-1 text-sm">
            {format(parseISO(note.createdAt), 'LLLL d, yyyy', {
              locale: ptBR
            })}
          </time>
          <h1>{note.title}</h1>
        </div>

        <Content />
      </article>
    </div>
  );
}
