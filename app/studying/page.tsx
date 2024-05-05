import Link from 'next/link';

import { compareDesc } from 'date-fns';

import { ChallengeTabs, MediaTabs } from '@/components/media-integration-tabs';
import { NoteCard } from '@/components/note-card';
import { Cards } from '@/components/projects-cards';
import { RoadmapCard } from '@/components/roadmap-card';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

import { Sketchs } from '@/components/ui/sketchs';
import Icons from '@/components/ui/icons';

import { Project, Roadmap, notes, projects, roadmaps } from '@/.velite';
import { Button } from '@/components/ui/button';

export default function LearningPathPage() {
  return (
    <div className="w-full pt-14 sm:pt-10">
      <section className="bg-white py-2 dark:bg-black lg:p-3.5 lg:ring-1 lg:ring-input/25">
        <div className="flex flex-col sm:grid sm:auto-rows-auto sm:grid-cols-2 sm:gap-x-3 sm:gap-y-8 lg:flex lg:h-auto lg:flex-row ">
          <div className="sm:col-span-full sm:col-start-1 md:row-span-1 lg:grow">
            <h1 className="m-0 my-3 max-w-max rounded-sm text-xl font-normal text-black dark:text-white md:bg-accent md:px-1.5">
              I&#39;m Learning...
            </h1>

            <p className="prose prose-zinc italic dark:prose-invert prose-p:my-3 prose-p:leading-normal ">
              Welcome to my tech labyrinth! Here, I present my bugs, my errors,
              my learnings, my bugs... Wait, sorry, I need to focus!
            </p>

            <div className="my-3 inline-flex space-x-1.5">
              <Badge
                variant={'outline'}
                className="pointer-events-none border-none px-1 py-0 text-red-500 ring-1 ring-red-500"
              >
                error
              </Badge>
              <Badge
                variant={'outline'}
                className="pointer-events-none border-none px-1 py-0 text-red-500 ring-1 ring-red-500"
              >
                error
              </Badge>
              <Badge
                variant={'outline'}
                className="pointer-events-none border-none px-1 py-0 text-green-500 ring-1 ring-green-500"
              >
                ok
              </Badge>
            </div>
          </div>

          <div className="flex sm:col-start-2 sm:row-start-2 sm:mx-auto">
            <Sketchs.SketchBooksImg className="mx-auto w-2/4 bg-white ring-1 ring-transparent dark:bg-black sm:size-full sm:w-11/12 xl:size-64" />
          </div>
          <div className="sm:col-span-1 sm:h-auto lg:w-[420px]">
            <MediaTabs />
          </div>
        </div>
      </section>

      {/* Roadmaps */}
      <section className={'relative'}>
        <div className="mb-2 mt-14 flex w-full items-end gap-3">
          <h2 className="w-max font-medium">Roadmaps</h2>
        </div>

        <p className="prose prose-zinc mb-5 w-max bg-white/70 dark:prose-invert prose-p:my-3 prose-p:leading-normal dark:bg-black/70 sm:bg-transparent">
          Study paths I&#39;m currently following
        </p>

        <Sketchs.SketchLearningPathImg className="absolute -top-28 right-0 -z-10" />

        <div className="flex flex-wrap gap-5">
          <div className="flex h-full w-full flex-wrap gap-2 md:w-7/12 lg:w-3/5">
            {roadmaps.map((roadmap: Roadmap, index: number) => (
              <Link
                key={index}
                href={roadmap.progress}
                className="h-auto w-full font-normal sm:w-[48%] md:w-full md:font-medium lg:w-[48%] xl:w-[32%]"
                target="_blank"
              >
                <RoadmapCard {...roadmap} />
              </Link>
            ))}
          </div>

          <div className="h-full w-full md:w-[38%] lg:w-4/12">
            <ChallengeTabs />
          </div>
        </div>
      </section>

      {/* Certifications */}
      {/* <section>
        <h2 className="mt-14 mb-5 font-medium">Certifications</h2>
      </section> */}

      {/* Projects */}
      <section className="w-full">
        <div className="mb-2 mt-24 flex w-full items-end gap-3">
          <h2 className="w-max font-medium">Study Projects</h2>

          <Link
            href={'/projects/all'}
            className="group flex items-center gap-1"
          >
            <small className="text-xs underline-offset-2 group-hover:underline">
              all projects
            </small>

            <Icons.PhArrowSquareOutDuotone className="size-3" />
          </Link>
        </div>

        <p className="prose prose-zinc mb-5 dark:prose-invert prose-p:my-3 prose-p:leading-normal ">
          Small projects, clones of existing systems, personal projects and
          ideas.
        </p>

        <Carousel
          opts={{ slidesToScroll: 'auto', loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-3">
            <StudyProjects />
          </CarouselContent>

          <CarouselPrevious className="left-1 bg-secondary sm:-left-5" />
          <CarouselNext className="right-1 bg-secondary sm:-right-5" />
        </Carousel>
      </section>

      {/* Notes */}
      <section className={'relative w-full'}>
        <div className="mb-2 mt-24 flex w-full items-end gap-3">
          <h2 className="w-max font-medium">Notes</h2>

          <Link
            href={'/studying/notes'}
            className="group flex items-center gap-1"
            aria-label="access all notes"
          >
            <small className="text-xs underline-offset-2 group-hover:underline">
              all notes
            </small>
            <Icons.PhArrowSquareOutDuotone className="size-3" />
          </Link>
        </div>

        <p className="prose prose-zinc mb-5 bg-white/70 dark:prose-invert prose-p:my-3 prose-p:leading-normal dark:bg-black/70 sm:bg-transparent sm:dark:bg-transparent">
          My little notes on study content, techniques I use in a particular
          language or technology, on the programming environment, notes on
          books, videos, tools and more.
        </p>

        <Sketchs.SketchLampImg className="absolute -top-28 right-0 -z-10 size-52 fill-transparent md:-top-[150px] md:size-64" />

        <div className="grid w-full auto-rows-auto grid-cols-2 gap-2.5 md:grid-cols-3 lg:grid-cols-5">
          <>
            {notes.slice(0, 4 + 3).map((note, index) => (
              <Link
                key={index}
                href={`/studying/notes/${note.slug}`}
                aria-label={`Access note from: ${note.title}`}
              >
                <NoteCard {...note} />
              </Link>
            ))}
          </>

          <Button
            variant="secondary"
            className="hover:bg-text-secondary-foreground h-auto w-14 space-x-1.5"
          >
            <Icons.PhDotsThreeOutlineFill className="size-6 text-primary/50" />
          </Button>
        </div>
      </section>

      {/* Books */}
      {/* <section className={'relative w-full'}>
        <div className="w-full flex items-end gap-3 mt-24 mb-2">
          <h2 className="w-max font-medium">Books i&#39;m reading</h2>
        </div>

        <p className="mb-5 prose prose-zinc dark:prose-invert prose-p:leading-normal prose-p:my-3 ">
          livros aqui
        </p>
      </section> */}
    </div>
  );
}

const StudyProjects = () => {
  const recentProjects = ((projects: Array<Project>) => {
    return projects
      .sort((a, b) =>
        compareDesc(new Date(a.started_at), new Date(b.started_at))
      )
      .filter(project => project.classification !== 'professional');
  })(projects);

  return (
    <>
      {recentProjects.map((propsProject: Project, index: number) => (
        <CarouselItem
          key={index}
          className="basis-full pl-3 sm:basis-3/6 md:basis-1/2 lg:basis-auto"
        >
          <Cards.StudyProjectCard {...propsProject} />
        </CarouselItem>
      ))}
    </>
  );
};
