'use client';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useCallback, useContext, useEffect, useState } from 'react';

import {
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter
} from '@/components/ui/sheet';
import { SheetScrollContext } from '@/context/sheet-scroll-context';

import { Project, projects } from '@/.velite/index';
import { MDXContent } from '@/components/mdx-content';
import { cn } from '@/lib/utils';

import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

import Icons from '@/components/ui/icons';

export default function SheetProjectPage({
  params: { slug }
}: {
  params: { slug: string };
}) {
  const project = projects.find((project: Project) => project.slug == slug);
  if (!project) notFound();

  const {
    title,
    description,
    core_tech,
    tools,
    image,
    video,
    content,
    type,
    classification,
    my_role,
    timeline,
    repository,
    deployment,
    contributors
  } = project;

  const [didScroll, setDidiScroll] = useState(false);
  const { sheetRef } = useContext(SheetScrollContext)!;

  const onScroll = useCallback(() => {
    const sheet = sheetRef.current;

    if (sheet) {
      const currentScrollY = sheetRef.current.scrollTop;

      if (currentScrollY > 0) {
        setDidiScroll(true);
      } else {
        setDidiScroll(false);
      }
    }
  }, [sheetRef]);

  useEffect(() => {
    const sheetElement = sheetRef.current;
    if (sheetElement) {
      sheetElement.addEventListener('scroll', onScroll);
    }

    return () => {
      if (sheetElement) {
        sheetElement.removeEventListener('scroll', onScroll);
      }
    };
  }, [onScroll, sheetRef]);

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="order-2 w-full lg:order-1">
          <SheetHeader
            className={cn(
              'bg-background/60 backdrop-blur-md lg:pr-5 lg:backdrop-blur-sm',
              'transition-transform duration-200 ease-linear',
              didScroll &&
                'sticky -top-5 z-50 border-b border-input py-2 transition-transform duration-150 ease-out lg:-top-6'
            )}
          >
            <SheetTitle>
              <h1
                className={cn(
                  'font-poppins font-light',
                  !didScroll && 'text-4xl'
                )}
              >
                {title}
              </h1>
            </SheetTitle>
            <SheetDescription>
              <p
                className={cn(
                  'font-inter',
                  didScroll ? 'line-clamp-1 text-ellipsis' : 'my-2 text-sm'
                )}
              >
                {description}
              </p>
            </SheetDescription>
          </SheetHeader>

          <div className="relative aspect-video h-72 w-full overflow-hidden md:h-80	lg:h-96">
            {video ? (
              <video className="h-full w-full object-cover" autoPlay loop muted>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                className={'h-full w-full overflow-hidden object-contain'}
                src={image}
                alt="Preview project"
                fill
                sizes="(max-width: 1024px) 288px, 512px, (min-width: 1024px) 384px, 682.66px"
              />
            )}
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

          <article
            className={cn(
              'prose prose-neutral relative mx-auto max-w-full dark:prose-invert lg:pr-5',
              'prose-a:font-normal prose-a:text-neutral-300 prose-a:underline-offset-2 prose-a:transition-colors prose-a:ease-linear' // a
            )}
          >
            <MDXContent code={content} />
          </article>

          <SheetFooter></SheetFooter>
        </div>

        <div className="relative order-1 my-6 flex w-full lg:order-2 lg:w-96 lg:p-0">
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

            <div className="lg:sticky lg:-top-[25px] lg:z-50 lg:h-[73px] lg:py-3 lg:pl-3">
              <div className="flex h-full w-full gap-3 lg:grid lg:grid-cols-2 lg:gap-1.5">
                <a
                  href={repository}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-full items-center"
                >
                  <div className="flex items-center lowercase">
                    <Icons.GithubIconFill className="mr-1 size-4" />
                    <span className="line-clamp-1 max-w-32 text-sm lg:max-w-[63px]">
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

            <div className="sticky top-[48px] z-50 hidden h-24 lg:block"></div>
          </div>
        </div>
      </div>
    </>
  );
}
