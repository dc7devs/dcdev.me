import { Project } from '@/.contentlayer/generated';
import Link from 'next/link';
import Icons from '../ui/icons';
import format from 'date-fns/format';
import LiveStatus from '../live-status';

import masteryTools from '@/content/mastery-tools';

export const RecentProjectSimpleCard = (_: Project) => (
  <div className="flex flex-col justify-center w-full p-5 py-2 bg-background ring-1 ring-ring/10 md:hover:scale-105 md:transition-transform md:duration-150">
    <div className="inline-flex items-center">
      {
        masteryTools('size-3').find(
          (icon) =>
            icon.toolName.toLocaleLowerCase() === _.coreTech.toLocaleLowerCase()
        )?.toolIcon
      }

      <small className="ml-2">{_.title}</small>
      <div className="flex gap-1.5 ml-3">
        {_.githubSourceCodeURL && (
          <Link href={_.githubSourceCodeURL} target="_blank">
            <Icons.GithubIconFill className="size-3" />
          </Link>
        )}

        {_.articleURL && (
          <Link href={_.articleURL} target="_blank">
            <Icons.MdiBookOpenPageVariant className="size-3" />
          </Link>
        )}

        {_.deploymentURL && (
          <Link href={_.deploymentURL} target="_blank">
            <Icons.MajesticonsExternalLink className="size-3" />
          </Link>
        )}
      </div>
      <LiveStatus status={_.status} />
    </div>

    <small className="ml-6 text-accent-foreground/50">
      {format(new Date(_.startDate), 'MMM yyyy')}
    </small>
  </div>
);
