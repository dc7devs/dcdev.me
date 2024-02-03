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
      <div className="flex justify-between items-center">
        <h1 className="text-black dark:text-white m-0 font-normal text-xl my-3 px-1.5 rounded-sm bg-accent max-w-max">
          Project portfolio
        </h1>
      </div>

      {/* projetos recente */}
      <section>
        <h3 className="text-black dark:text-white mb-3 mt-5 text-base font-medium">
          Recent
        </h3>
        <Carousel opts={{ slidesToScroll: 'auto' }} className="w-full">
          <CarouselContent className="-ml-3">
            <RecentProjects />
          </CarouselContent>

          <CarouselPrevious className="left-1 sm:-left-5 bg-secondary" />
          <CarouselNext className="right-1 sm:-right-5 bg-secondary" />
        </Carousel>
      </section>

      {/* Projetos categorizados port tipo */}

      <ByProjectType />
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
          className="pl-3 basis-10/12 sm:basis-3/6 md:basis-1/2 lg:basis-auto"
        >
          <Cards.RecentProjectCard {...propsProject} />
        </CarouselItem>
      ))}
    </>
  );
};

// projetos por tipo
const ByProjectType = () => {
  const organizedProjectsByType = ((projects: Array<Project>) => {
    const organizedProjects: {
      [key: string]: Array<Project>;
    } = {};

    // Itera sobre os projetos e os organiza por 'projectType'
    projects.forEach((project) => {
      const projectType = project.projectType.toLowerCase();

      if (!organizedProjects[projectType]) {
        organizedProjects[projectType] = [];
      }

      organizedProjects[projectType].push(project);
    });

    return organizedProjects;
  })(allProjects);

  return (
    <div>
      {Object.keys(organizedProjectsByType).map((projectType) => (
        <section key={projectType}>
          <h3 className="text-black dark:text-white mb-3 mt-10 text-base font-medium">
            {projectType}
          </h3>

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
