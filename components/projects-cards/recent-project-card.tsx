import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import LiveStatus from '@/components/live-status';
import {
  GithubIconFill,
  MajesticonsExternalLink,
  MdiBookOpenPageVariant
} from '@/components/ui/icons';
import ToolTip from '@/components/tooltip';
import { Badge } from '@/components/ui/badge';

import { format } from 'date-fns';
import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { Project } from '@/.velite';

type RecentProjectProps = Project & {
  className?: string;
};

export const RecentProjectCard = ({
  core_tech,
  title,
  description,
  started_at,
  status,
  repository,
  deployment,
  image,
  className
}: RecentProjectProps) => {
  return (
    <Card
      className={cn(
        'border-input bg-background relative flex h-48 w-full space-x-1 text-balance sm:w-10/12 md:rounded-lg lg:w-96 lg:rounded-md',
        className
      )}
    >
      <div className="flex basis-9/12 flex-col">
        <CardHeader className="flex-row pt-4 pr-0 pb-2 pl-4">
          <div className="m-0">
            <CardTitle>{title}</CardTitle>
            <small className="text-accent-foreground/70">
              {format(new Date(started_at), 'MMM yyyy')}
            </small>
          </div>

          <LiveStatus status={status} className="mr-3 mt-2" />
        </CardHeader>

        <CardContent className="grow pr-0 pl-4">
          <CardDescription className="line-clamp-3">
            {description}
          </CardDescription>
        </CardContent>

        <CardFooter className="flex items-center justify-between pr-0 pb-2 pl-4">
          <div className="flex items-center gap-x-2">
            {repository && (
              <Link
                href={repository}
                target="_blank"
                aria-label="access the project's github code"
              >
                <ToolTip message="source code">
                  {/* <TabOpenSourceFill className="size-4" /> */}
                  {/* ou */}
                  <GithubIconFill className="size-4" />
                </ToolTip>
              </Link>
            )}

            {/* {article && (
              <Link
                href={article}
                target="_blank"
                aria-label="access notes on the development of the project"
              >
                <ToolTip message="documentation">
                  <MdiBookOpenPageVariant className="size-4" />
                </ToolTip>
              </Link>
            )} */}

            {deployment && (
              <Link
                href={deployment}
                target="_blank"
                aria-label="access project deployment"
              >
                <MajesticonsExternalLink className="size-4" />
              </Link>
            )}
          </div>

          <a href={core_tech.url} target="_blank" rel="noreferrer">
            <Badge variant="secondary" className="mr-2 px-1.5">
              {core_tech.name}
            </Badge>
          </a>
        </CardFooter>
      </div>

      <div className="relative basis-3/12 overflow-hidden rounded-r-xl md:rounded-r-lg lg:rounded-r-md">
        <Image
          className={
            'h-full w-full basis-3/12 overflow-hidden object-cover object-left'
          }
          src={image!}
          alt="Preview project"
          width={300}
          height={192}
          priority
        />
      </div>
    </Card>
  );
};
