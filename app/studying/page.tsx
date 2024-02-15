import Link from 'next/link';

import { compareDesc } from 'date-fns';

import { ChallengeTabs, MediaTabs } from '@/components/media-integration-tabs';
import { NoteCard } from '@/components/note-card';
import { Cards } from '@/components/projects';
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

import {
  Project,
  Roadmap,
  allProjects,
  allRoadmaps,
  allNotes
} from '@/.contentlayer/generated';
import { Button } from '@/components/ui/button';
import Icons from '@/components/ui/icons';

export default function LearningPathPage() {
  return (
    <div className="w-full pt-14 sm:pt-10">
      <div className="py-2 sm:p-3.5 bg-white dark:bg-black sm:ring-1 ring-input/25">
        <div className="flex flex-col gap-5 sm:grid sm:grid-cols-2 sm:auto-rows-auto sm:gap-y-8 sm:gap-x-3 lg:flex lg:flex-row lg:h-auto lg:gap-x-2">
          <div className="sm:col-span-full sm:col-start-1 md:row-span-1 lg:grow">
            <h1 className="text-black dark:text-white m-0 font-normal text-xl my-3 md:px-1.5 rounded-sm md:bg-accent max-w-max">
              I&#39;m Learning...
            </h1>

            <p className="prose prose-zinc dark:prose-invert prose-p:leading-normal prose-p:my-3 italic ">
              Welcome to my tech labyrinth! Here, I present my bugs, my errors,
              my learnings, my bugs... Wait, sorry, I need to focus!
            </p>

            <div className="inline-flex space-x-1.5 my-3">
              <Badge
                variant={'outline'}
                className="pointer-events-none ring-1 ring-red-500 text-red-500 border-none px-1 py-0 brightness-75"
              >
                error
              </Badge>
              <Badge
                variant={'outline'}
                className="pointer-events-none ring-1 ring-red-500 text-red-500 border-none px-1 py-0 brightness-75"
              >
                error
              </Badge>
              <Badge
                variant={'outline'}
                className="pointer-events-none ring-1 ring-green-500 text-green-500 border-none px-1 py-0 brightness-75"
              >
                ok
              </Badge>
            </div>
          </div>

          <div className="flex sm:row-start-2 sm:col-start-2 sm:mx-auto">
            <Sketchs.SketchBooksImg className="ring-1 ring-transparent w-2/4 mx-auto sm:w-11/12 sm:size-full xl:size-64 bg-white dark:bg-black" />
          </div>

          <div className="sm:col-span-1 sm:h-auto lg:w-[420px]">
            <MediaTabs />
          </div>
        </div>
      </div>

      <section>
        <h2 className="mt-14 mb-5 font-medium">Roadmaps</h2>

        <div className="flex flex-wrap gap-5">
          <div className="flex flex-wrap gap-2 h-full w-full md:w-7/12 lg:w-3/5">
            {allRoadmaps.map((roadmap: Roadmap) => (
              <Link
                key={roadmap._id}
                href={roadmap.progressRoadmapURL}
                className="w-full sm:w-[48%] md:w-full lg:w-[48%] xl:w-[32%] h-auto font-normal md:font-medium"
                target="_blank"
              >
                <RoadmapCard {...roadmap} />
              </Link>
            ))}
          </div>

          <div className="w-full h-full md:w-[38%] lg:w-4/12">
            <ChallengeTabs />
          </div>
        </div>
      </section>

      {/* <section>
        <h2 className="mt-14 mb-5 font-medium">Courses</h2>
      </section> */}

      <section className={'relative'}>
        <h2 className="mt-24 mb-5 font-medium">Notes</h2>

        <Sketchs.SketchLampImg className="size-80 bg-transparent -z-10 absolute right-0 -top-[150px]" />

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2.5  auto-rows-auto">
          <>
            {allNotes.slice(0, 4 + 3).map((note, index) => (
              <Link
                key={index}
                href={`/studying/notes/${note.slug}`}
                className=""
              >
                <NoteCard {...note} />
              </Link>
            ))}
          </>
          <Button variant="secondary" className="h-auto w-14 space-x-1.5">
            <Icons.PhDotsThreeOutlineFill className="size-6 text-primary/50" />
          </Button>
        </div>
      </section>

      <section>
        <h2 className="mt-14 mb-5 font-medium">Study Projects</h2>

        <Carousel
          opts={{ slidesToScroll: 'auto', loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-3">
            <StudyProjects />
          </CarouselContent>

          <CarouselPrevious className="left-1 sm:-left-5 bg-secondary" />
          <CarouselNext className="right-1 sm:-right-5 bg-secondary" />
        </Carousel>
      </section>

      {/* <section>
        <h2 className="mt-14 mb-5 font-medium">Books</h2>
      </section> */}
    </div>
  );
}

const StudyProjects = () => {
  const recentProjects = ((projects: Array<Project>) => {
    return projects
      .sort((a, b) => compareDesc(new Date(a.startDate), new Date(b.startDate)))
      .filter((project) => project.projectClassification !== 'professional');
  })(allProjects);

  return (
    <>
      {recentProjects.map((propsProject: Project) => (
        <CarouselItem
          key={propsProject._id}
          className="pl-3 basis-full sm:basis-3/6 md:basis-1/2 lg:basis-auto"
        >
          <Cards.StudyProjectCard {...propsProject} />
        </CarouselItem>
      ))}
    </>
  );
};
