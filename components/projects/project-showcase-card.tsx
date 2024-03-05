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
import { Project } from '@/.contentlayer/generated';

type ShowcaseProjectProps = Project & {
  className?: string;
};

export const projectShowcaseCard = ({
  coreTech,
  title,
  description,
  startedAt,
  githubSourceCodeURL,
  articleURL,
  deploymentURL,
  imageURL,
  toolsUsed,
  projectType,
  className
}: ShowcaseProjectProps) => {
  return (
    <Card
      className={cn(
        'flex flex-col relative w-full min-h-full rounded-lg md:rounded-sm border-input md:hover:border-black/30 md:dark:hover:border-white/30 transition duration-100 ease-linear text-balance bg-background',
        className
      )}
    >
      <CardHeader className="pb-2 pt-0 px-0">
        <div className="relative w-full h-52 overflow-hidden rounded-t-lg md:rounded-t-sm">
          <Image
            className={'object-cover overflow-hidden h-full w-full'}
            src={cn(
              imageURL ??
                'https://res.cloudinary.com/dyxtcsnna/image/upload/v1706910149/dcdev/patter-code_mkvdxv.png'
            )}
            alt="Preview project"
            width={300}
            height={200}
          />
        </div>

        <div className="px-3 pt-3" style={{ margin: '0' }}>
          <CardTitle>{title}</CardTitle>

          <small className="text-accent-foreground/70">
            {format(new Date(startedAt), 'MMM yyyy')}
          </small>
        </div>
      </CardHeader>

      <CardContent className="grow px-3 pb-3">
        <Badge
          variant="secondary"
          className="mb-2 pointer-events-none ring-1 ring-primary rounded-sm px-1.5 py-0"
        >
          {projectType}
        </Badge>

        <CardDescription className="line-clamp-3 text-ellipsis">
          {description}
        </CardDescription>

        <div className="inline-flex gap-1.5 my-3 flex-wrap">
          {toolsUsed.map((tool: string, index: number) => (
            <Badge
              key={index}
              variant={'outline'}
              className="pointer-events-none ring-1 ring-accent-foreground text-accent-foreground border-none px-1 py-0 brightness-75"
            >
              {tool}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between pb-2 px-3">
        <div className="flex items-center gap-x-2">
          {githubSourceCodeURL && (
            <Link
              href={githubSourceCodeURL}
              target="_blank"
              aria-label="access the project's github code"
            >
              <ToolTip message="source code">
                <Icons.GithubIconFill className="size-4" />
              </ToolTip>
            </Link>
          )}

          {articleURL && (
            <Link
              href={articleURL}
              target="_blank"
              aria-label="access notes on the development of the project"
            >
              <ToolTip message="documentation">
                <Icons.MdiBookOpenPageVariant className="size-4" />
              </ToolTip>
            </Link>
          )}

          {deploymentURL && (
            <Link
              href={deploymentURL}
              target="_blank"
              aria-label="access project deployment"
            >
              <Icons.MajesticonsExternalLink className="size-4" />
            </Link>
          )}
        </div>

        <Badge variant="secondary" className="px-1.5">
          {coreTech}
        </Badge>
      </CardFooter>
    </Card>
  );
};
