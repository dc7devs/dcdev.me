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

export const StudyProjectCard = ({
  coreTech,
  title,
  description,
  startedAt,
  githubSourceCodeURL,
  articleURL,
  deploymentURL,
  imageURL,
  toolsUsed
}: Project) => {
  return (
    <Card
      className={
        'flex flex-col relative w-full min-h-full rounded-lg border-input hover:border-black/30 dark:hover:border-white/30 transition duration-100 ease-linear text-balance lg:w-96 bg-background'
      }
    >
      <CardHeader className="pb-2 pt-0 px-0">
        <div className="relative w-full h-24 overflow-hidden rounded-t-lg">
          <Image
            className={'object-cover overflow-hidden h-full w-full'}
            src={cn(
              imageURL ??
                'https://res.cloudinary.com/dyxtcsnna/image/upload/v1706910149/dcdev/patter-code_mkvdxv.png'
            )}
            alt="Preview project"
            height={100}
            width={384}
          />
        </div>

        <div className="px-3 pt-3">
          <CardTitle>{title}</CardTitle>
          <small className="text-accent-foreground/70">
            {format(new Date(startedAt), 'MMM yyyy')}
          </small>
        </div>
      </CardHeader>

      <CardContent className="grow px-3">
        <CardDescription className="line-clamp-2 text-ellipsis">
          {description}
        </CardDescription>

        <div className="inline-flex gap-1.5 my-3 flex-wrap">
          {toolsUsed.map((tool: string, index: number) => (
            <Badge
              key={index}
              variant={'secondary'}
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
