import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { AvatarSpotifyProfile } from './avatar';
import { Artists } from './artists';

import { Separator } from '@/components/ui/separator';
import Icons from '@/components/ui/icons';

import { getDataSpotify } from '@/lib/spotify';
import { cn } from '@/lib/utils';
import { ProgressBarDefault, ProgressBarStatic } from './progres-bar';
import { SpotifyData } from '@/@types';

// import Unavailable from '../unavailable';

export const SpotifyOverviewCard = async () => {
  const { currentlyPlaying, recentlyPlayed, userProfile }: SpotifyData =
    await getDataSpotify();

  const trackURL =
    currentlyPlaying?.item?.external_urls.spotify ??
    recentlyPlayed?.track?.external_urls.spotify;
  const trackName = currentlyPlaying?.item?.name ?? recentlyPlayed?.track?.name;
  const trackArtists =
    currentlyPlaying?.item?.artists ?? recentlyPlayed?.track?.artists;

  const trackImage =
    currentlyPlaying?.item?.album?.images[0].url ??
    recentlyPlayed?.track?.album?.images[0].url;

  return (
    <Card className="flex flex-col h-full border-none mt-0 sm:ml-9 rounded-none">
      {/* <Unavailable className={'-z-10 ring-1 ring-input rounded-none'} /> */}

      <CardContent className="relative h-28 overflow-hidden p-0">
        {trackImage && (
          <Image
            alt="Muggs Shop"
            className="absolute left-0 top-0 w-full rounded object-cover object-center brightness-75"
            height={500}
            src={trackImage}
            width={500}
          />
        )}
        <Badge
          className={cn(
            'absolute left-2 top-2',
            currentlyPlaying?.is_playing
              ? 'text-black bg-green-400 hover:bg-green-400'
              : 'text-background bg-primary/80 hover:bg-primary/80'
          )}
        >
          {currentlyPlaying?.is_playing
            ? 'Tocando agora'
            : 'Tocada recentemente'}
        </Badge>

        <AvatarSpotifyProfile data={userProfile} />
      </CardContent>

      <CardFooter className="relative block space-y-4">
        {trackName && trackImage && (
          <Image
            alt={trackName}
            className="absolute -top-12 left-16 aspect-video size-16 -translate-x-1/2 rounded-lg object-cover"
            height={500}
            src={trackImage}
            width={500}
          />
        )}
        <div className="flex w-full justify-between pt-1">
          <div>
            {trackURL && (
              <Link
                className="text-base font-medium hover:underline"
                href={trackURL}
                target="_blank"
              >
                {trackName}
              </Link>
            )}

            <Artists data={trackArtists} />
          </div>

          <Icons.BiSpotify
            className={cn(
              currentlyPlaying?.is_playing ? 'text-green-400' : 'text-primary'
            )}
          />
        </div>
        <Separator className="bg-secondary" />

        {currentlyPlaying?.is_playing ? (
          <ProgressBarDefault data={currentlyPlaying} />
        ) : (
          <ProgressBarStatic />
        )}
      </CardFooter>
    </Card>
  );
};
