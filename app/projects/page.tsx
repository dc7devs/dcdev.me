import { compareDesc } from 'date-fns';

import { Cards } from '@/components/projects-cards';
import Link from 'next/link';
import Icons from '@/components/ui/icons';

import { Project, projects } from '@/.velite';

export default function ProjectPage() {
  return (
    <div className="w-full pt-14 sm:pt-10">
      <h1 className="text-black dark:text-white font-medium text-xl px-2 rounded-sm bg-accent max-w-max mx-auto">
        Projects I&#39;m working on
      </h1>

      <section className="flex flex-col">
        <div className="flex justify-center gap-3 w-auto mx-auto flex-wrap self-center mt-10 md:mt-14 ">
          <RecentProjects />
        </div>
      </section>

      <section className="flex flex-col size-auto mt-24">
        <div className="w-full flex items-end gap-3 mb-2">
          <h2 className="w-max font-medium">Showcase</h2>

          <Link href={'/projects/all'} className="group ml-auto">
            <small className="text-sm group-hover:underline underline-offset-2 font-medium">
              all projects
              <Icons.MaterialSymbolsArrowRightAltRounded className="size-3.5 md:size-3.5 inline ml-0.5" />
            </small>
          </Link>
        </div>

        <div className="w-full grid grid-column-showcase-container gap-5 md:gap-2 pt-5 border-t-[.7px] border-t-input bg-white dark:bg-black">
          <ShowcaseProjects />
        </div>
      </section>
    </div>
  );
}

// projetos recente
const RecentProjects = () => {
  const recentProjects = ((projects: Array<Project>) => {
    return projects
      .sort((a, b) =>
        compareDesc(new Date(a.started_at), new Date(b.started_at))
      )
      .filter((_) => _.status !== 'done')
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

// projetos em vitrine
const ShowcaseProjects = () => {
  const showcaseProjects = ((projects: Array<Project>) => {
    return projects
      .sort((a, b) =>
        compareDesc(new Date(a.started_at), new Date(b.started_at))
      )
      .filter((project) => project.is_promoted_to_showcase);
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
