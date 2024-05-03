import Link from 'next/link';

import { NoteCard } from '@/components/note-card';
import BackButton from '@/components/go-back-button';
import Icons from '@/components/ui/icons';

import { Note, notes } from '@/.velite';
import { Separator } from '@/components/ui/separator';

export default function NotesPage() {
  return (
    <div className="w-full pt-14 sm:pt-10">
      <div className="prose prose-zinc mx-auto text-center dark:prose-invert prose-p:my-3 prose-p:leading-normal">
        <h1 className="mx-auto max-w-max rounded-sm bg-accent px-2 text-xl font-medium text-black dark:text-white">
          All Notes
        </h1>

        <p>
          Here are all my little notes on study content, techniques I use in a
          specific language or tech, on the programming environment, books,
          videos, tools and more!
        </p>
      </div>

      <Separator orientation="horizontal" className="mx-auto mt-14" />

      <BackButton className="mb-7 flex gap-1 p-0 align-middle text-muted-foreground	hover:text-foreground">
        <Icons.MaterialSymbolsArrowLeftAltRounded />
        <small className="text-sm">back</small>
      </BackButton>

      <div className="grid w-full auto-rows-auto grid-cols-2 gap-2.5 md:grid-cols-3 lg:grid-cols-5">
        {notes.map((note: Note, index: number) => (
          <Link key={index} href={`/studying/notes/${note.slug}`}>
            <NoteCard {...note} />
          </Link>
        ))}
      </div>
    </div>
  );
}
