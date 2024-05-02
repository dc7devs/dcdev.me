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

import { Card, CardTitle } from '@/components/ui/card';
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
        <div className="w-full order-2 lg:order-1">
          <SheetHeader
            className={cn(
              'bg-background/60 backdrop-blur-md lg:backdrop-blur-sm lg:pr-5',
              'transition-transform duration-200 ease-linear',
              didScroll &&
                'sticky z-50 -top-6 py-2 border-b border-input transition-transform duration-150 ease-out'
            )}
          >
            <SheetTitle>
              <h1
                className={cn(
                  'font-light font-poppins',
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

          <div className="relative w-full h-72 md:h-80 lg:h-96 aspect-video	overflow-hidden">
            {video ? (
              <video className="object-cover w-full h-full" autoPlay loop muted>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                className={'object-contain overflow-hidden h-full w-full'}
                src={image}
                alt="Preview project"
                fill
                sizes="(max-width: 1024px) 288px, 512px, (min-width: 1024px) 384px, 682.66px"
              />
            )}
          </div>

          <Separator orientation="horizontal" className="my-5 mx-auto" />

          <div className="flex justify-stretch items-start gap-3 lg:gap-10 w-full pb-5 lg:py-7 mb-5 font-inter">
            <div className="flex-1 flex flex-col justify-center gap-2">
              <small className="text-sm font-semibold">My Role</small>
              <small className="text-xs">{my_role?.join(' | ')}</small>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-2">
              <small className="text-sm font-semibold">
                Classification Project
              </small>
              <small className="text-xs">{classification.toUpperCase()}</small>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-2">
              <small className="text-sm font-semibold">Timeline</small>
              <small className="text-xs">{timeline}</small>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-2">
              <small className="text-sm font-semibold">Project Type</small>
              <small className="text-xs">{type}</small>
            </div>
          </div>

          <article
            className={cn(
              'mx-auto max-w-full prose prose-neutral dark:prose-invert relative lg:pr-5',
              'prose-a:underline-offset-2 prose-a:font-normal prose-a:transition-colors prose-a:ease-linear prose-a:text-neutral-300' // a
            )}
          >
            <MDXContent code={content} />
          </article>

          <SheetFooter></SheetFooter>
        </div>

        <div className="flex w-full order-1 lg:order-2 my-6 lg:p-0 lg:w-96 relative">
          <div
            className={cn(
              'flex items-center flex-wrap gap-3 lg:gap-0 lg:block',
              'lg:divide-y divide-input w-full h-full border-l border-transparent lg:border-input'
            )}
          >
            <div className="h-auto lg:pl-3 lg:py-3">
              <small className="hidden lg:inline-block text-sm font-inter font-normal">
                Contributors
              </small>

              <div className="flex flex-wrap items-center ml-2 lg:mx-3 lg:mt-3">
                {contributors.map(
                  ({ name, avatar_url, github_url }, index: number) => (
                    <a
                      key={index}
                      href={github_url}
                      target="_blank"
                      className="-ml-2 group"
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

            <div className="h-auto p-0 lg:pl-3 lg:py-3">
              <small className="hidden lg:block text-sm font-inter font-normal">
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

            <div className="h-auto lg:pl-3 lg:py-3">
              <small className="hidden lg:block text-sm font-inter font-normal">
                Tool List
              </small>

              <div className="w-full mt-2 inline-flex gap-1.5 flex-wrap">
                {tools.map((tool: string, index: number) => (
                  <Badge
                    key={index}
                    variant={'outline'}
                    className="pointer-events-none ring-1 ring-accent-foreground text-accent-foreground border-none px-1 py-0 brightness-75"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="lg:h-[73px] lg:pl-3 lg:py-3 lg:sticky lg:-top-[25px] lg:z-50">
              <div className="grid grid-cols-2 h-full w-full gap-1.5">
                <CardGithub title={title} repo_url={repository} />
                {/* <CardDemo title={title} demo_url={deployment} /> */}
              </div>
            </div>

            <div className="hidden lg:block sticky top-[48px] z-50 h-24"></div>
          </div>
        </div>
      </div>
    </>
  );
}

const CardGithub = ({
  title,
  repo_url
}: {
  title: string;
  repo_url: string;
}) => {
  return (
    <a href={repo_url} target="_blank" rel="noreferrer">
      <Card
        className={cn(
          'h-full w-auto',
          'py-1.5 px-2 flex space-x-2 items-center max-h-max shadow-none rounded-sm border-input',
          'cursor-pointer hover:bg-secondary'
        )}
      >
        <div className="size-auto relative">
          <div className="absolute bottom-0 right-0 z-50 ring-1 ring-white bg-white dark:bg-black rounded-full">
            <Icons.GithubIconFill className="size-3" />
          </div>
          <Image
            className="rounded-full bg-black ring-1 ring-input"
            src={
              'https://res.cloudinary.com/dyxtcsnna/image/upload/v1709661316/dcdev/Logo_dark_mkfxrs.png'
            }
            alt="@dcdevs"
            height={28}
            width={28}
          />
        </div>

        <div className="max-w-32 lg:max-w-[60px]">
          <CardTitle className="text-sm line-clamp-1">{title}</CardTitle>
        </div>
      </Card>
    </a>
  );
};
