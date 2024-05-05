import Icons from './ui/icons';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import Link from 'next/link';
import { compareDesc } from 'date-fns';
import { cn } from '@/lib/utils';

import { Cards } from './projects-cards';
import Unavailable from './unavailable';
import { Project, projects } from '@/.velite';
import DownloadCV from './cv-download-button';

export default async function RecentWorkUnderDev({
  className
}: {
  className?: string;
}) {
  return (
    <Card className={cn(className)}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="inline-flex w-max align-middle text-primary">
          <Icons.GameIconsCoffeeCup className="mr-2 size-4" />
          <div>Currently working...</div>
        </CardTitle>

        <Link
          href={'/projects'}
          style={{ width: 'max-content', marginTop: '0' }}
        >
          <small>see projects</small>
        </Link>
      </CardHeader>

      <CardContent className="inline-flex w-full gap-3">
        <ul className="flex w-full flex-col justify-stretch gap-2">
          <RecentProjects />

          <li className="flex w-full flex-col gap-1 md:flex-row md:gap-0">
            <DownloadCV />

            <a
              href="https://read.cv/dcdev"
              target="_blank"
              rel="noreferrer"
              className="self-center"
            >
              <Button
                type="button"
                variant="link"
                className="inline-flex max-w-max items-end underline underline-offset-2 opacity-90 hover:opacity-100"
              >
                read.cv
                <Icons.PhArrowUpRightBold className="ml-0.5 size-3.5" />
              </Button>
            </a>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}

const RecentProjects = () => {
  const recentProjects = ((projects: Array<Project>) => {
    return projects
      .sort((a, b) =>
        compareDesc(new Date(a.started_at), new Date(b.started_at))
      )
      .filter(_ => _.status !== 'done')
      .slice(0, 3);
  })(projects);

  return (
    <>
      {recentProjects ? (
        recentProjects.map((propsProject: Project, index: number) => (
          <li key={index}>
            <Cards.RecentProjectSimpleCard {...propsProject} />
          </li>
        ))
      ) : (
        <li>
          <div className="relative h-14 w-full bg-background outline-dashed outline-1 outline-secondary">
            <Unavailable />
          </div>
        </li>
      )}
    </>
  );
};
