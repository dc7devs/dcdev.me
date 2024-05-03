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
      <div className="prose prose-zinc mx-auto text-center dark:prose-invert prose-p:my-3 prose-p:leading-normal">
        <h1 className="mx-auto max-w-max rounded-sm bg-accent px-2 text-xl font-medium text-black dark:text-white">
          Projects I&#39;m working on
        </h1>

        <p>Here are all my projects, listed and categorized by type!</p>
      </div>

      <Separator orientation="horizontal" className="mx-auto mt-14" />

      <BackButton className="flex gap-1 p-0 align-middle text-muted-foreground hover:text-foreground">
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
          <h2 className="mb-3 mt-10 text-base font-medium text-black dark:text-white">
            {projectType}
          </h2>

          <Carousel opts={{ slidesToScroll: 'auto' }} className="w-full">
            <CarouselContent className="-ml-3">
              {organizedProjectsByType[projectType].map(
                (propsProject: Project, index: number) => (
                  <CarouselItem
                    key={index}
                    className="basis-10/12 pl-3 sm:basis-3/6 md:basis-1/2 lg:basis-auto"
                  >
                    <Cards.ProjectCardByType {...propsProject} />
                  </CarouselItem>
                )
              )}
            </CarouselContent>

            <CarouselPrevious className="left-1 bg-secondary sm:-left-5" />
            <CarouselNext className="right-1 bg-secondary sm:-right-5" />
          </Carousel>
        </section>
      ))}
    </div>
  );
};
