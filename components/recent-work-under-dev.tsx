import Icons from './ui/icons';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import Link from 'next/link';
import { compareDesc } from 'date-fns';
import { cn } from '@/lib/utils';

import { Cards } from './projects';
import { Project, allProjects } from '@/.contentlayer/generated';

export default async function RecentWorkUnderDev({
  className
}: {
  className?: string;
}) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle className="flex align-middle text-primary">
          <Icons.GameIconsCoffeeCup className="size-4 mr-2" />
          <span>Working...</span>

          <Link href={'/projects'} className="ml-auto">
            <small>view all</small>
          </Link>
        </CardTitle>
      </CardHeader>

      <CardContent className="inline-flex w-full gap-3">
        <ul className="w-full flex flex-col justify-stretch gap-2">
          <RecentProjects />

          <Button
            type="button"
            variant="secondary"
            className="inline-flex align-middle"
          >
            Download CV
            <Icons.IcRoundDownloadForOffline className="size-4 ml-2" />
          </Button>
        </ul>
      </CardContent>
    </Card>
  );
}

const RecentProjects = () => {
  const recentProjects = ((projects: Array<Project>) => {
    return projects
      .sort((a, b) => compareDesc(new Date(a.startDate), new Date(b.startDate)))
      .slice(0, 3);
  })(allProjects);

  return (
    <>
      {recentProjects.map((propsProject: Project) => (
        <li key={propsProject._id}>
          <Cards.RecentProjectSimpleCard {...propsProject} />
        </li>
      ))}
    </>
  );
};
