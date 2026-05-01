import {
  GithubIconFill,
  MajesticonsExternalLink,
  MaterialSymbolsLightBoxRounded
} from '../ui/icons';
import { format } from 'date-fns';
import LiveStatus from '../live-status';

import masteryTools from '@/content/_mastery-tools';
import { Project } from '@/.velite';

export const RecentProjectSimpleCard = (project: Project) => (
  <div className="bg-background ring-ring/10 flex w-full flex-col justify-center px-3.5 py-2 ring-1">
    <div className="inline-flex w-full items-center gap-x-1.5">
      {masteryTools('size-4 basis-4').find(
        icon =>
          icon.toolName.toLocaleLowerCase().trim() ===
          project.core_tech.name.toLocaleLowerCase().trim()
      )?.toolIcon ?? (
        <MaterialSymbolsLightBoxRounded className="size-4 basis-4" />
      )}

      <p className="grow basis-60 truncate text-base sm:text-sm">
        {project.title}
      </p>

      <div className="flex gap-x-3.5 sm:gap-2">
        {project.repository && (
          <a
            href={project.repository}
            target="_blank"
            aria-label="access the project's github code"
            rel="noreferrer"
          >
            <GithubIconFill className="size-4.5 sm:size-3.5" />
          </a>
        )}

        {project.deployment && (
          <a
            href={project.deployment}
            target="_blank"
            aria-label="access project deployment"
            rel="noreferrer"
          >
            <MajesticonsExternalLink className="size-4.5 sm:size-3.5" />
          </a>
        )}

        <LiveStatus className="my-auto" status={project.status} />
      </div>
    </div>

    <small className="text-accent-foreground/60 ml-4">
      {format(new Date(project.started_at), 'MMM yyyy')}
    </small>

    <small className="text-accent-foreground/80 ml-4">
      <p className="truncate">{project.description}</p>
    </small>
  </div>
);
