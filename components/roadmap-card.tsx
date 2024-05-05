import LiveStatus from './live-status';
import Image from 'next/image';
import Icons from './ui/icons';

import { Roadmap } from '@/.velite';

export const RoadmapCard = (roadmap: Roadmap) => {
  return (
    <div className="group relative flex cursor-pointer flex-col justify-center rounded-lg bg-background px-3.5 py-2 ring-1 ring-ring/10 md:hover:ring-ring/50">
      <div className="z-30 inline-flex items-center gap-x-1.5">
        <Icons.SimpleIconsRoadmapdotsh className="size-4" />

        <p className="truncate text-base sm:text-sm md:transition-transform md:duration-150 md:group-hover:translate-x-3">
          {roadmap.title}
        </p>

        <LiveStatus className="ml-auto" status={roadmap.status} />
      </div>

      <small className="z-30">
        <p className="blend-difference truncate text-accent-foreground">
          {roadmap.description}
        </p>
      </small>

      {roadmap.image && (
        <div className="absolute left-2/4 top-0 z-20 hidden h-full w-2/4 overflow-hidden rounded-r-lg md:transition-transform md:duration-150 md:group-hover:block">
          <Image
            className={
              'h-full w-full overflow-hidden object-cover brightness-90 dark:brightness-50'
            }
            src={roadmap.image}
            alt="Preview roadmap"
            fill
          />
        </div>
      )}
    </div>
  );
};
