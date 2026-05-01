'use client';
import { Project, projects } from '@/.velite/index';
import { cn } from '@/lib/utils';

import { MDXContent } from '@/components/mdx-content';
import { notFound } from 'next/navigation';
import { use } from 'react';

export default function ProjectPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projects.find((project: Project) => project.slug == slug);
  if (!project) notFound();

  const { content } = project;

  return (
    <article
      className={cn(
        'prose prose-neutral dark:prose-invert relative mx-auto max-w-4xl lg:pr-5',
        'prose-a:font-normal prose-a:text-neutral-300 prose-a:underline-offset-2 prose-a:transition-colors prose-a:ease-linear' // a
      )}
    >
      <MDXContent code={content} />
    </article>
  );
}
