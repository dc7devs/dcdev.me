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

import { Project } from '@/.contentlayer/generated';
import { cn } from '@/lib/utils';

export const RecentProjectCard = (props: Project) => {
  const {
    coreTech,
    title,
    description,
    startDate,
    status,
    githubSourceCodeURL,
    articleURL,
    deploymentURL,
    imageURL
  } = props;

  return (
    <Card
      className={
        'flex relative w-full min-h-48 space-x-1 border-input transition duration-100 ease-linear text-balance sm:min-h-full md:rounded-lg lg:w-80 lg:rounded-md bg-background' // min-h-48 sm:min-h-max
      }
    >
      <div className="flex flex-col basis-4/5">
        <CardHeader className="flex-row pb-2 pl-4 pt-4 pr-0">
          <div>
            <CardTitle>{title}</CardTitle>
            <small className="text-accent-foreground/70">
              {format(new Date(startDate), 'MMM yyyy')}
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
            {githubSourceCodeURL && (
              <Link href={githubSourceCodeURL} target="_blank">
                <ToolTip message="source code">
                  {/* <Icons.TabOpenSourceFill className="size-4" /> */}
                  {/* ou */}
                  <Icons.GithubIconFill className="size-4" />
                </ToolTip>
              </Link>
            )}

            {articleURL && (
              <Link href={articleURL} target="_blank">
                <ToolTip message="documentation">
                  <Icons.MdiBookOpenPageVariant className="size-4" />
                </ToolTip>
              </Link>
            )}

            {deploymentURL && (
              <Link href={deploymentURL} target="_blank">
                <Icons.MajesticonsExternalLink className="size-4" />
              </Link>
            )}
          </div>

          <Badge variant="secondary" className="px-1.5 mr-2">
            {coreTech}
          </Badge>
        </CardFooter>
      </div>

      <div className="relative basis-1/5 overflow-hidden rounded-r-xl md:rounded-r-lg lg:rounded-r-md">
        <Image
          className={
            'object-cover object-left overflow-hidden basis-1/5 h-full w-full'
          }
          src={cn(
            imageURL ??
              'https://res.cloudinary.com/dyxtcsnna/image/upload/v1706910149/dcdev/patter-code_mkvdxv.png'
          )}
          alt="Preview project"
          fill
        />
      </div>
    </Card>
  );
};
