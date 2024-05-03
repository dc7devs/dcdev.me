import Image from 'next/image';
import Link from 'next/link';
import format from 'date-fns/format';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import ToolTip from '../tooltip';
import { Badge } from '../ui/badge';
import Icons from '../ui/icons';

import { Project } from '@/.velite';

export const StudyProjectCard = ({
  core_tech,
  title,
  description,
  started_at,
  repository,
  deployment,
  image,
  video,
  tools
}: Project) => {
  return (
    <Card
      className={
        'relative flex min-h-full w-full flex-col text-balance rounded-lg border-input bg-background lg:w-96'
      }
    >
      <CardHeader className="px-0 pb-2 pt-0">
        <div className="relative h-24 w-full overflow-hidden rounded-t-lg">
          {video ? (
            <video className="h-full w-full object-cover" autoPlay loop muted>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              className={'h-full w-full overflow-hidden object-cover'}
              src={image}
              alt="Preview project"
              fill
            />
          )}
        </div>

        <div className="px-3 pt-3">
          <CardTitle>{title}</CardTitle>
          <small className="text-accent-foreground/70">
            {format(new Date(started_at), 'MMM yyyy')}
          </small>
        </div>
      </CardHeader>

      <CardContent className="grow px-3">
        <CardDescription className="line-clamp-2 text-ellipsis">
          {description}
        </CardDescription>

        <div className="my-3 inline-flex flex-wrap gap-1.5">
          {tools.map((tool: string, index: number) => (
            <Badge
              key={index}
              variant={'secondary'}
              className="pointer-events-none border-none px-1 py-0 text-accent-foreground ring-1 ring-accent-foreground brightness-75"
            >
              {tool}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between px-3 pb-2">
        <div className="flex items-center gap-x-2">
          {repository && (
            <Link
              href={repository}
              target="_blank"
              aria-label="access the project's github code"
            >
              <ToolTip message="source code">
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
          <Badge variant="secondary" className="px-1.5">
            {core_tech.name}
          </Badge>
        </a>
      </CardFooter>
    </Card>
  );
};
