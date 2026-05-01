import { compareDesc } from 'date-fns';

import { Cards } from '@/components/projects-cards';

import { Project, projects } from '@/.velite';

export default function ProjectPage() {
  return (
    <div className="w-full pt-14 sm:pt-10">
      <section className="prose prose-zinc dark:prose-invert prose-p:my-3 prose-p:leading-normal mx-auto max-w-2xl text-center">
        <h1 className="bg-accent mx-auto max-w-max rounded-xs px-2 text-xl font-medium text-black dark:text-white">
          Projects
        </h1>

        <p>
          A collection of professional work, experiments, product sketches, and
          personal builds.
        </p>
      </section>

      <div className="grid-column-showcase-container border-t-input mt-14 grid w-full gap-5 border-t-[.7px] bg-white pt-5 md:gap-2 dark:bg-black">
        <ProjectList />
      </div>
    </div>
  );
}

const ProjectList = () => {
  const sortedProjects = [...projects].sort((a, b) =>
    compareDesc(new Date(a.started_at), new Date(b.started_at))
  );

  return (
    <>
      {sortedProjects.map((propsProject: Project, index: number) => {
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
