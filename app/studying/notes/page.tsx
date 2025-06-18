import Link from 'next/link';

import { NoteCard } from '@/components/note-card';
import BackButton from '@/components/go-back-button';
import { MaterialSymbolsArrowLeftAltRounded } from '@/components/ui/icons';

import { Note, notes } from '@/.velite';
import { Separator } from '@/components/ui/separator';

export default function NotesPage() {
  return (
    <div className="w-full pt-14 sm:pt-10">
      <div className="prose prose-zinc dark:prose-invert prose-p:my-3 prose-p:leading-normal mx-auto text-center">
        <h1 className="bg-accent mx-auto max-w-max rounded-xs px-2 text-xl font-medium text-black dark:text-white">
          All Notes
        </h1>

        <p>
          Here are all my little notes on study content, techniques I use in a
          specific language or tech, on the programming environment, books,
          videos, tools and more!
        </p>
      </div>

      <Separator orientation="horizontal" className="mx-auto mt-14" />

      <BackButton className="text-muted-foreground hover:text-foreground mb-7 flex gap-1 p-0 align-middle">
        <MaterialSymbolsArrowLeftAltRounded />
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
