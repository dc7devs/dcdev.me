'use client';
import { CurrentlyPlaying } from '@/@types/spotify';
import { Progress } from '@/components/ui/progress';
import { useEffect, useMemo, useState } from 'react';

export const ProgressBarDefault = ({ data }: { data: CurrentlyPlaying }) => {
  const [barProgression, setBarProgression] = useState<number>(
    data.progress_ms
  );

  useEffect(() => {
    const updateRate = 1000;

    const interval = setInterval(() => {
      setBarProgression((prevProgress: number) => {
        if (prevProgress < data.item.duration_ms) {
          return prevProgress + updateRate;
        } else {
          clearInterval(interval);
          return data.item.duration_ms;
        }
      });
    }, updateRate);

    return () => clearInterval(interval);
  }, [data]);

  const formattedDuration = useMemo(
    () => formatDuration(Number(barProgression)),
    [barProgression]
  );
  const formattedTotalDuration = useMemo(
    () => formatDuration(Number(data.item.duration_ms)),
    [data]
  );

  return (
    <div className="group flex w-full items-center justify-center gap-x-3.5">
      <small className="flex-1 font-poppins text-xs">{formattedDuration}</small>

      <Progress
        value={(barProgression / data.item.duration_ms) * 100}
        className="h-1"
        aria-label="progress barspotify player progress bar"
      />

      <small className="flex-1 font-poppins text-xs">
        {formattedTotalDuration}
      </small>
    </div>
  );
};

export const ProgressBarStatic = () => {
  return (
    <div className="group flex w-full items-center justify-center gap-x-3.5">
      <small className="flex-1 font-poppins text-xs">
        {formatDuration(Number(222400))}
      </small>
      <Progress
        value={40}
        className="h-1"
        aria-label="progress barspotify player progress bar"
      />
      <small className="flex-1 font-poppins text-xs">
        {formatDuration(Number(556000))}
      </small>
    </div>
  );
};

function formatDuration(ms: number) {
  let totalSeconds = Math.floor(ms / 1000);

  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
