import { Project, projects } from '@/.velite';
import BackButton from '@/components/go-back-button';
import { Cards } from '@/components/projects-cards';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import Icons from '@/components/ui/icons';
import { Separator } from '@/components/ui/separator';

export default function AllProjectsPage() {
  return (
    <div className="w-full pt-14 sm:pt-10">
      <div className="prose prose-zinc dark:prose-invert prose-p:leading-normal prose-p:my-3 mx-auto text-center">
        <h1 className="text-black dark:text-white font-medium text-xl px-2 rounded-sm bg-accent max-w-max mx-auto">
          Projects I&#39;m working on
        </h1>

        <p>Here are all my projects, listed and categorized by type!</p>
      </div>

      <Separator orientation="horizontal" className="mt-14 mx-auto" />

      <BackButton className="flex text-muted-foreground hover:text-foreground p-0 align-middle gap-1">
        <Icons.MaterialSymbolsArrowLeftAltRounded />
        <small className="text-sm">back</small>
      </BackButton>

      <SectionBuilderByProjectType />
    </div>
  );
}

// projetos por tipo
const SectionBuilderByProjectType = () => {
  const organizedProjectsByType = ((projects: Array<Project>) => {
    const organizedProjects: {
      [key: string]: Array<Project>;
    } = {};

    projects.forEach((project) => {
      const projectType = project.type.toLowerCase();

      organizedProjects[projectType] = organizedProjects[projectType] || [];
      organizedProjects[projectType].push(project);
    });

    return organizedProjects;
  })(projects);

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
                (propsProject: Project, index: number) => (
                  <CarouselItem
                    key={index}
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
