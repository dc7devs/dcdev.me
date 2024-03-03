import Icons from './ui/icons';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import Link from 'next/link';
import { compareDesc } from 'date-fns';
import { cn } from '@/lib/utils';

import { Cards } from './projects';
import { Project, allProjects } from '@/.contentlayer/generated';
import Unavailable from './unavailable';

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
          <small>
            see projects
            <Icons.PhArrowSquareOutDuotone className="size-2.5 inline ml-1" />
          </small>
        </Link>
      </CardHeader>

      <CardContent className="inline-flex w-full gap-3">
        <ul className="w-full flex flex-col justify-stretch gap-2">
          <RecentProjects />

          <li className="w-full">
            <Button
              type="button"
              variant="secondary"
              className="inline-flex align-middle w-full"
            >
              Download CV
              <Icons.IcRoundDownloadForOffline className="size-4 ml-2" />
            </Button>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}

const RecentProjects = () => {
  const recentProjects = ((projects: Array<Project>) => {
    return projects
      .sort((a, b) => compareDesc(new Date(a.startedAt), new Date(b.startedAt)))
      .filter((_) => _.status !== 'done')
      .slice(0, 3);
  })(allProjects);

  return (
    <>
      {recentProjects ? (
        recentProjects.map((propsProject: Project) => (
          <li key={propsProject._id}>
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
