import { Project, projects } from '@/.velite/index';

// import { MDXContent } from '@/components/mdx-content';

export default function ProjectPage({
  params: { slug }
}: {
  params: { slug: string };
}) {
  const project = projects.find((project: Project) => project.slug == slug);
  if (!project) return;

  return (
    <>
      <div>{project?.title}</div>
    </>
  );
}
