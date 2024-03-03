import { compareDesc } from 'date-fns';

import { Project, allProjects } from '@/.contentlayer/generated';
import { Cards } from '@/components/projects';
import Link from 'next/link';
import Icons from '@/components/ui/icons';

export default function ProjectPage() {
  return (
    <div className="w-full pt-14 sm:pt-10">
      <h1 className="text-black dark:text-white font-medium text-xl md:px-2 rounded-sm md:bg-accent max-w-max mx-auto">
        Projects I&#39;m working on
      </h1>

      <section className="flex flex-col items-center">
        <h2 className="text-black dark:text-white mb-8 mt-10 text-base font-semibold">
          Current Focus
        </h2>

        <div className="flex justify-center gap-3 w-auto mx-auto flex-wrap">
          <RecentProjects />
        </div>
      </section>

      <section className="flex flex-col size-auto mt-24">
        <div className="w-full flex items-end gap-3 mt-24 mb-2">
          <h2 className="w-max font-medium">Showcase</h2>

          <Link href={'/projects/all'} className="group ml-auto">
            <small className="text-sm group-hover:underline underline-offset-2">
              all projects
              <Icons.MaterialSymbolsArrowRightAltRounded className="size-3.5 md:size-3.5 inline ml-0.5" />
            </small>
          </Link>
        </div>

        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-2 pt-5 border-t-[.7px] border-t-input bg-white dark:bg-black">
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
      .sort((a, b) => compareDesc(new Date(a.startedAt), new Date(b.startedAt)))
      .slice(0, 3);
  })(allProjects);

  return (
    <>
      {recentProjects.map((propsProject: Project) => (
        <Cards.RecentProjectCard key={propsProject._id} {...propsProject} />
      ))}
    </>
  );
};

// projetos em vitrine
const ShowcaseProjects = () => {
  const showcaseProjects = ((projects: Array<Project>) => {
    return projects
      .sort((a, b) => compareDesc(new Date(a.startedAt), new Date(b.startedAt)))
      .filter((project) => project.isPromotedToShowcase);
  })(allProjects);

  return (
    <>
      {showcaseProjects.map((propsProject: Project) => {
        return (
          <Cards.projectShowcaseCard
            key={propsProject._id}
            className="w-full"
            {...propsProject}
          />
        );
      })}
    </>
  );
};
