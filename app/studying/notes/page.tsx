import Link from 'next/link';

import { NoteCard } from '@/components/note-card';
import BackButton from '@/components/go-back-button';
import Icons from '@/components/ui/icons';

import { Note, notes } from '@/.velite';
import { Separator } from '@/components/ui/separator';

export default function NotesPage() {
  return (
    <div className="w-full pt-14 sm:pt-10">
      <div className="prose prose-zinc dark:prose-invert prose-p:leading-normal prose-p:my-3 mx-auto text-center">
        <h1 className="text-black dark:text-white font-medium text-xl px-2 rounded-sm bg-accent max-w-max mx-auto">
          All Notes
        </h1>

        <p>
          Here are all my little notes on study content, techniques I use in a
          specific language or tech, on the programming environment, books,
          videos, tools and more!
        </p>
      </div>

      <Separator orientation="horizontal" className="mt-14 mx-auto" />

      <BackButton className="flex text-muted-foreground hover:text-foreground p-0 mb-7 align-middle	gap-1">
        <Icons.MaterialSymbolsArrowLeftAltRounded />
        <small className="text-sm">back</small>
      </BackButton>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 auto-rows-auto">
        {notes.map((note: Note, index: number) => (
          <Link key={index} href={`/studying/notes/${note.slug}`}>
            <NoteCard {...note} />
          </Link>
        ))}
      </div>
    </div>
  );
}
