import { compareDesc } from 'date-fns';

import { Cards } from '@/components/projects-cards';
import Link from 'next/link';
import Icons from '@/components/ui/icons';

import { Project, projects } from '@/.velite';

export default function ProjectPage() {
  return (
    <div className="w-full pt-14 sm:pt-10">
      <h1 className="mx-auto max-w-max rounded-sm bg-accent px-2 text-xl font-medium text-black dark:text-white">
        Projects I&#39;m working on
      </h1>

      <section className="flex flex-col">
        <div className="mx-auto mt-10 flex w-auto flex-wrap justify-center gap-3 self-center md:mt-14 ">
          <RecentProjects />
        </div>
      </section>

      <section className="mt-24 flex size-auto flex-col">
        <div className="mb-2 flex w-full items-end gap-3">
          <h2 className="w-max font-medium">Showcase</h2>

          <Link href={'/projects/all'} className="group ml-auto">
            <small className="text-sm font-medium underline-offset-2 group-hover:underline">
              all projects
              <Icons.MaterialSymbolsArrowRightAltRounded className="ml-0.5 inline size-3.5 md:size-3.5" />
            </small>
          </Link>
        </div>

        <div className="grid-column-showcase-container grid w-full gap-5 border-t-[.7px] border-t-input bg-white pt-5 dark:bg-black md:gap-2">
          <ShowcaseProjects />
        </div>
      </section>
    </div>
  );
}

const RecentProjects = () => {
  const recentProjects = ((projects: Array<Project>) => {
    return projects
      .sort((a, b) =>
        compareDesc(new Date(a.started_at), new Date(b.started_at))
      )
      .filter(_ => _.status !== 'done')
      .slice(0, 3);
  })(projects);

  return (
    <>
      {recentProjects.map((propsProject: Project, index: number) => (
        <Cards.RecentProjectCard key={index} {...propsProject} />
      ))}
    </>
  );
};

const ShowcaseProjects = () => {
  const showcaseProjects = ((projects: Array<Project>) => {
    return projects
      .sort((a, b) =>
        compareDesc(new Date(a.started_at), new Date(b.started_at))
      )
      .filter(project => project.is_promoted_to_showcase);
  })(projects);

  return (
    <>
      {showcaseProjects.map((propsProject: Project, index: number) => {
        return (
          <Cards.ProjectShowcaseCard
            key={index}
            className="w-full"
            {...propsProject}
          />
        );
      })}
    </>
  );
};
