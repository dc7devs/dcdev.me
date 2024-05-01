import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import LiveStatus from '@/components/live-status';
import Icons from '@/components/ui/icons';
import ToolTip from '@/components/tooltip';
import { Badge } from '@/components/ui/badge';

import format from 'date-fns/format';
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
        'flex relative w-full h-48 space-x-1 border-input text-balance sm:w-10/12 md:rounded-lg lg:w-96 lg:rounded-md bg-background',
        className
      )}
    >
      <div className="flex flex-col basis-9/12">
        <CardHeader className="flex-row pb-2 pl-4 pt-4 pr-0">
          <div>
            <CardTitle>{title}</CardTitle>
            <small className="text-accent-foreground/70">
              {format(new Date(started_at), 'MMM yyyy')}
            </small>
          </div>

          <LiveStatus status={status} className="mr-3 mt-auto" />
        </CardHeader>

        <CardContent className="grow pl-4 pr-0">
          <CardDescription className="line-clamp-3">
            {description}
          </CardDescription>
        </CardContent>

        <CardFooter className="flex items-center justify-between pb-2 pl-4 pr-0">
          <div className="flex items-center gap-x-2">
            {repository && (
              <Link
                href={repository}
                target="_blank"
                aria-label="access the project's github code"
              >
                <ToolTip message="source code">
                  {/* <Icons.TabOpenSourceFill className="size-4" /> */}
                  {/* ou */}
                  <Icons.GithubIconFill className="size-4" />
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
                  <Icons.MdiBookOpenPageVariant className="size-4" />
                </ToolTip>
              </Link>
            )} */}

            {deployment && (
              <Link
                href={deployment}
                target="_blank"
                aria-label="access project deployment"
              >
                <Icons.MajesticonsExternalLink className="size-4" />
              </Link>
            )}
          </div>

          <a href={core_tech.url} target="_blank" rel="noreferrer">
            <Badge variant="secondary" className="px-1.5 mr-2">
              {core_tech.name}
            </Badge>
          </a>
        </CardFooter>
      </div>

      <div className="relative basis-3/12 overflow-hidden rounded-r-xl md:rounded-r-lg lg:rounded-r-md">
        <Image
          className={
            'object-cover object-left overflow-hidden basis-3/12 h-full w-full'
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
