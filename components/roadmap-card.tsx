import { Roadmap } from '@/.contentlayer/generated';
import LiveStatus from './live-status';
import Image from 'next/image';
import Icons from './ui/icons';

export const RoadmapCard = (roadmap: Roadmap) => {
  return (
    <div className="flex flex-col justify-center bg-background px-3.5 py-2 ring-1 ring-ring/10 group md:hover:ring-ring/50 cursor-pointer rounded-lg relative">
      <div className="inline-flex items-center gap-x-1.5 z-30">
        <Icons.SimpleIconsRoadmapdotsh className="size-4" />

        <p className="text-base sm:text-sm truncate md:group-hover:translate-x-3 md:transition-transform md:duration-150">
          {roadmap.title}
        </p>

        <LiveStatus className="ml-auto" status={roadmap.status} />
      </div>

      <small className="z-30">
        <p className="truncate blend-difference text-accent-foreground">
          {roadmap.description}
        </p>
      </small>

      {roadmap.roadmapImagePreviewURL && (
        <div className="hidden md:group-hover:block md:transition-transform md:duration-150 absolute z-20 top-0 left-2/4 h-full w-2/4 overflow-hidden rounded-r-lg">
          <Image
            className={
              'object-cover overflow-hidden h-full w-full brightness-90 dark:brightness-50'
            }
            src={roadmap.roadmapImagePreviewURL}
            alt="Preview roadmap"
            fill
          />
        </div>
      )}
    </div>
  );
};
