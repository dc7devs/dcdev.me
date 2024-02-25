import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

import { compareDesc } from 'date-fns';

import { Project, allProjects } from '@/.contentlayer/generated';
import { Cards } from '@/components/projects';

export default function ProjectPage() {
  return (
    <div className="w-full pt-14 sm:pt-10">
      <h1 className="text-black dark:text-white m-0 font-normal text-xl my-3 md:px-1.5 rounded-sm md:bg-accent max-w-max">
        Projects I&#39;m working on
      </h1>

      <section>
        <h2 className="text-black dark:text-white mb-3 mt-5 text-base font-medium">
          Recent
        </h2>

        <Carousel opts={{ slidesToScroll: 'auto' }} className="w-full">
          <CarouselContent className="-ml-3">
            <RecentProjects />
          </CarouselContent>

          <CarouselPrevious className="left-1 sm:-left-5 bg-secondary" />
          <CarouselNext className="right-1 sm:-right-5 bg-secondary" />
        </Carousel>
      </section>

      <SectionBuilderByProjectType />
    </div>
  );
}

// projetos recente
const RecentProjects = () => {
  const recentProjects = ((projects: Array<Project>) => {
    return projects
      .sort((a, b) => compareDesc(new Date(a.startDate), new Date(b.startDate)))
      .slice(0, 3);
  })(allProjects);

  return (
    <>
      {recentProjects.map((propsProject: Project) => (
        <CarouselItem
          key={propsProject._id}
          className="pl-3 basis-full sm:basis-3/6 md:basis-1/2 lg:basis-auto" // basis-10/12
        >
          <Cards.RecentProjectCard {...propsProject} />
        </CarouselItem>
      ))}
    </>
  );
};

// projetos por tipo
const SectionBuilderByProjectType = () => {
  const organizedProjectsByType = ((projects: Array<Project>) => {
    const organizedProjects: {
      [key: string]: Array<Project>;
    } = {};

    projects
      .filter((project) => project.status === 'done')
      .forEach((project) => {
        const projectType = project.projectType.toLowerCase();

        organizedProjects[projectType] = organizedProjects[projectType] || [];
        organizedProjects[projectType].push(project);
      });

    return organizedProjects;
  })(allProjects);

  return (
    <div>
      {Object.keys(organizedProjectsByType).map((projectType) => (
        <section key={projectType}>
          <h2 className="text-black dark:text-white mb-3 mt-10 text-base font-medium">
            {projectType}
          </h2>

          <Carousel opts={{ slidesToScroll: 'auto' }} className="w-full">
            <CarouselContent className="-ml-3">
              {organizedProjectsByType[projectType].map(
                (propsProject: Project) => (
                  <CarouselItem
                    key={propsProject._id}
                    className="pl-3 basis-10/12 sm:basis-3/6 md:basis-1/2 lg:basis-auto"
                  >
                    <Cards.ProjectCardByType {...propsProject} />
                  </CarouselItem>
                )
              )}
            </CarouselContent>

            <CarouselPrevious className="left-1 sm:-left-5 bg-secondary" />
            <CarouselNext className="right-1 sm:-right-5 bg-secondary" />
          </Carousel>
        </section>
      ))}
    </div>
  );
};
