import Icons from '../ui/icons';
import format from 'date-fns/format';
import LiveStatus from '../live-status';

import masteryTools from '@/content/_mastery-tools';
import { Project } from '@/.velite';

export const RecentProjectSimpleCard = (project: Project) => (
  <div className="flex flex-col justify-center w-full px-3.5 py-2 bg-background ring-1 ring-ring/10">
    <div className="inline-flex items-center gap-x-1.5 w-full">
      {masteryTools('size-4 basis-4').find(
        (icon) =>
          icon.toolName.toLocaleLowerCase().trim() ===
          project.core_tech.name.toLocaleLowerCase().trim()
      )?.toolIcon ?? (
        <Icons.MaterialSymbolsLightBoxRounded className="size-4 basis-4" />
      )}

      <p className="text-base basis-60 grow sm:text-sm truncate">
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
            <Icons.GithubIconFill className="size-4.5 sm:size-3.5" />
          </a>
        )}

        {/* {project.article && (
          <Link
            href={project.article}
            target="projectblank"
            aria-label="access notes on the development of the project"
          >
            <Icons.MdiBookOpenPageVariant className="size-4.5 sm:size-3.5" />
          </Link>
        )} */}

        {project.deployment && (
          <a
            href={project.deployment}
            target="_blank"
            aria-label="access project deployment"
            rel="noreferrer"
          >
            <Icons.MajesticonsExternalLink className="size-4.5 sm:size-3.5" />
          </a>
        )}

        <LiveStatus className="my-auto" status={project.status} />
      </div>
    </div>

    <small className="ml-4 text-accent-foreground/60">
      {format(new Date(project.started_at), 'MMM yyyy')}
    </small>

    <small className="ml-4 text-accent-foreground/80">
      <p className="truncate">{project.description}</p>
    </small>
  </div>
);
