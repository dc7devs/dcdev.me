'use client';
import { Project, projects } from '@/.velite/index';
import { cn } from '@/lib/utils';

import { MDXContent } from '@/components/mdx-content';

export default function ProjectPage({
  params: { slug }
}: {
  params: { slug: string };
}) {
  const project = projects.find((project: Project) => project.slug == slug);
  if (!project) return;

  const { content } = project;

  return (
    <article
      className={cn(
        'prose prose-neutral relative mx-auto max-w-4xl dark:prose-invert lg:pr-5',
        'prose-a:font-normal prose-a:text-neutral-300 prose-a:underline-offset-2 prose-a:transition-colors prose-a:ease-linear' // a
      )}
    >
      <MDXContent code={content} />
    </article>
  );
}
