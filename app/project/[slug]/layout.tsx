'use client';

import { Project, projects } from '@/.velite';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icons from '@/components/ui/icons';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ReactNode } from 'react';

export default function ProjectLayout({
  params: { slug },
  children
}: {
  params: { slug: string };
  children: ReactNode;
}) {
  const project = projects.find((project: Project) => project.slug == slug);
  if (!project) return;

  const {
    title,
    description,
    core_tech,
    tools,
    image,
    video,
    type,
    classification,
    my_role,
    timeline,
    repository,
    deployment,
    contributors
  } = project;

  return (
    <>
      <div className="flex flex-col justify-center lg:flex-row">
        <div className="order-2 w-full max-w-4xl lg:order-1 lg:mt-10">
          <div className="lg:pr-5">
            <h1 className={'font-poppins text-4xl font-light'}>{title}</h1>
            <p className={'my-2 font-inter text-sm'}>{description}</p>

            <div className="relative aspect-video h-auto w-full overflow-hidden  lg:h-auto">
              {video ? (
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  className={'h-full w-full overflow-hidden object-contain'}
                  src={image}
                  alt="Preview project"
                  fill
                />
              )}
            </div>
          </div>

          <Separator orientation="horizontal" className="mx-auto my-5" />

          <div className="mb-5 flex w-full items-start justify-stretch gap-3 pb-5 font-inter lg:gap-10 lg:py-7">
            <div className="flex flex-1 flex-col justify-center gap-2">
              <small className="text-sm font-semibold">My Role</small>
              <small className="text-xs">{my_role?.join(' | ')}</small>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-2">
              <small className="text-sm font-semibold">
                Classification Project
              </small>
              <small className="text-xs">{classification.toUpperCase()}</small>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-2">
              <small className="text-sm font-semibold">Timeline</small>
              <small className="text-xs">{timeline}</small>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-2">
              <small className="text-sm font-semibold">Project Type</small>
              <small className="text-xs">{type}</small>
            </div>
          </div>

          {children}
        </div>

        <div className="relative order-1 my-6 flex w-full lg:order-2 lg:my-0 lg:w-96 lg:p-0">
          <div
            className={cn(
              'flex flex-wrap items-center gap-3 lg:block lg:gap-0',
              'h-full w-full divide-input border-l border-transparent lg:divide-y lg:border-input'
            )}
          >
            <div className="h-auto lg:py-3 lg:pl-3">
              <small className="hidden font-inter text-sm font-normal lg:inline-block">
                Contributors
              </small>

              <div className="ml-2 flex flex-wrap items-center lg:mx-3 lg:mt-3">
                {contributors.map(
                  ({ name, avatar_url, github_url }, index: number) => (
                    <a
                      key={index}
                      href={github_url}
                      target="_blank"
                      className="group -ml-2"
                      rel="noreferrer"
                    >
                      <Avatar className="size-8 ring-1 ring-transparent group-hover:ring-ring">
                        <AvatarImage src={avatar_url} alt={name} />
                      </Avatar>
                    </a>
                  )
                )}
              </div>
            </div>

            <div className="h-auto p-0 lg:py-3 lg:pl-3">
              <small className="hidden font-inter text-sm font-normal lg:block">
                Core Tech
              </small>

              <div className="w-full lg:mt-1">
                <a href={core_tech.url} target="_blank" rel="noreferrer">
                  <Badge variant="secondary" className="inline px-1.5">
                    {core_tech.name}
                  </Badge>
                </a>
              </div>
            </div>

            <div className="h-auto lg:py-3 lg:pl-3">
              <small className="hidden font-inter text-sm font-normal lg:block">
                Tool List
              </small>

              <div className="mt-2 inline-flex w-full flex-wrap gap-1.5">
                {tools.map((tool: string, index: number) => (
                  <Badge
                    key={index}
                    variant={'outline'}
                    className="pointer-events-none border-none px-1 py-0 text-accent-foreground ring-1 ring-accent-foreground brightness-75"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-0 lg:z-30 lg:h-[73px] lg:py-3 lg:pl-3">
              <div className="flex h-full w-full gap-3 lg:grid lg:grid-cols-2 lg:gap-1.5">
                <a
                  href={repository}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-full items-center"
                >
                  <div className="flex items-center lowercase">
                    <Icons.GithubIconFill className="mr-1 size-4" />
                    <span className="line-clamp-1 max-w-max text-sm">
                      {title}
                    </span>
                    <Icons.PhArrowUpRightBold className="mb-0.5 ml-0.5 size-3.5 self-end" />
                  </div>
                </a>

                <a
                  href={deployment}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    'flex h-full items-center',
                    !deployment && 'hidden'
                  )}
                >
                  <div className="line-clamp-1 flex items-center text-sm lowercase">
                    <Icons.PhPlayCircleFill className="mr-1 size-4" />
                    <span>demo</span>
                    <Icons.PhArrowUpRightBold className="mb-0.5 ml-0.5 size-3.5 self-end" />
                  </div>
                </a>
              </div>
            </div>

            <div className="sticky top-[72.2px] z-50 hidden h-56 lg:block"></div>
          </div>
        </div>
      </div>
    </>
  );
}
