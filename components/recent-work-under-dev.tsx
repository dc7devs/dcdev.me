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
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="inline-flex align-middle text-primary w-max">
          <Icons.GameIconsCoffeeCup className="size-4 mr-2" />
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
        <ul className="w-full flex flex-col justify-stretch gap-2">
          <RecentProjects />

          <li className="w-full flex flex-col gap-1 md:gap-0 md:flex-row">
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
                className="inline-flex items-end max-w-max opacity-90 hover:opacity-100 underline underline-offset-2"
              >
                read.cv
                <Icons.PhArrowUpRightBold className="size-3.5 ml-0.5" />
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
      .filter((_) => _.status !== 'done')
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
          <div className="h-14 w-full bg-background outline-dashed outline-1 outline-secondary relative">
            <Unavailable />
          </div>
        </li>
      )}
    </>
  );
};
