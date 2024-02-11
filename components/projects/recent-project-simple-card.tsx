import { Project } from '@/.contentlayer/generated';
import Link from 'next/link';
import Icons from '../ui/icons';
import format from 'date-fns/format';
import LiveStatus from '../live-status';

import masteryTools from '@/content/mastery-tools';

export const RecentProjectSimpleCard = (project: Project) => (
  <div className="flex flex-col justify-center w-full px-3.5 py-2 bg-background ring-1 ring-ring/10 md:hover:scale-105 md:transition-transform md:duration-150">
    <div className="inline-flex items-center gap-x-1.5">
      {masteryTools('size-4').find(
        (icon) =>
          icon.toolName.toLocaleLowerCase() ===
          project.coreTech.toLocaleLowerCase()
      )?.toolIcon ?? (
        <Icons.MaterialSymbolsLightBoxRounded className="size-4" />
      )}

      <p className="text-base basis-60 sm:text-sm truncate">{project.title}</p>

      <div className="flex gap-x-2.5 sm:gap-2">
        {project.githubSourceCodeURL && (
          <Link href={project.githubSourceCodeURL} target="projectblank">
            <Icons.GithubIconFill className="size-4 sm:size-3" />
          </Link>
        )}

        {project.articleURL && (
          <Link href={project.articleURL} target="projectblank">
            <Icons.MdiBookOpenPageVariant className="size-4 sm:size-3" />
          </Link>
        )}

        {project.deploymentURL && (
          <Link href={project.deploymentURL} target="_blank">
            <Icons.MajesticonsExternalLink className="size-4 sm:size-3" />
          </Link>
        )}
      </div>

      <LiveStatus className="ml-auto" status={project.status} />
    </div>

    <small className="ml-4 text-accent-foreground/60">
      {format(new Date(project.startDate), 'MMM yyyy')}
    </small>

    <small className="ml-4 text-accent-foreground/80">
      <p className="truncate">{project.description}</p>
    </small>
  </div>
);
