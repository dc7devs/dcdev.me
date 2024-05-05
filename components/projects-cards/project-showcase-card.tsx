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

import { cn } from '@/lib/utils';
import { Project } from '@/.velite';

type ShowcaseProjectProps = Project & {
  className?: string;
};

export const ProjectShowcaseCard = ({
  core_tech,
  title,
  description,
  started_at,
  repository,
  deployment,
  image,
  video,
  tools,
  type,
  className,
  slug
}: ShowcaseProjectProps) => {
  return (
    <Card
      className={cn(
        'relative flex min-h-full w-full flex-col text-balance rounded-lg border-input bg-background transition duration-100 ease-linear md:scale-[.99] md:hover:scale-[1.01]',
        className
      )}
    >
      <CardHeader className="px-0 pb-2 pt-0">
        <Link
          href={`/project/${slug}`}
          aria-label="access the project's documentation"
        >
          <div className="relative h-52 w-full overflow-hidden rounded-t-lg">
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
        </Link>

        <div className="px-3 pt-3" style={{ margin: '0' }}>
          <CardTitle>{title}</CardTitle>

          <small className="text-accent-foreground/70">
            {format(new Date(started_at), 'MMM yyyy')}
          </small>
        </div>
      </CardHeader>

      <CardContent className="grow px-3 pb-3">
        <CardDescription className="line-clamp-3 text-ellipsis">
          {description}
        </CardDescription>

        <div className="my-3 inline-flex flex-wrap gap-1.5">
          <Badge
            variant="secondary"
            className="pointer-events-none border-none px-1 py-0 ring-1 ring-primary brightness-75"
          >
            {type}
          </Badge>

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
          <Link
            href={`/project/${slug}`}
            aria-label="access the project's documentation"
          >
            <ToolTip message="documentation">
              <Icons.MdiBookOpenPageVariant className="size-4" />
            </ToolTip>
          </Link>

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
