'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { Artists } from './artists';

import { Separator } from '@/components/ui/separator';
import Icons from '@/components/ui/icons';

import { fetchWithAuthorization } from '@/lib/spotify';
import { cn } from '@/lib/utils';
import { ProgressBarDefault, ProgressBarStatic } from './progres-bar';
import { SpotifyData } from '@/@types';
import { useQuery } from 'react-query';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';

export const SpotifyOverviewCard = () => {
  const { data, isFetching, error } = useQuery<SpotifyData>(
    'spotifyData',
    async () => {
      const [currentlyPlayingData, recentlyPlayedData, userProfile] =
        await Promise.all([
          fetchWithAuthorization(
            'https://api.spotify.com/v1/me/player/currently-playing'
          ),
          fetchWithAuthorization(
            'https://api.spotify.com/v1/me/player/recently-played?limit=1'
          ),
          fetchWithAuthorization('https://api.spotify.com/v1/me')
        ]);

      return {
        currentlyPlaying: currentlyPlayingData ?? null,
        recentlyPlayed: recentlyPlayedData.items[0],
        userProfile: userProfile
      };
    },
    {
      staleTime: 1000 * 60 // 1 min
    }
  );

  if (error) {
    return (
      <Card className="flex flex-col h-full border-none mt-0 lg:ml-9 rounded-none">
        <CardContent className="h-full flex items-center justify-center p-6">
          <p className="text-xs text-red-400 font-medium">
            Oops! Something&#39;s wrong with that component!
          </p>
        </CardContent>
      </Card>
    );
  }

  if (isFetching) {
    return (
      <Card className="flex flex-col h-full border-none mt-0 lg:ml-9 rounded-none">
        <CardContent className="relative h-28 overflow-hidden p-0">
          <Skeleton className="h-28 w-full rounded-none" />
        </CardContent>

        <CardFooter className="relative block space-y-4">
          <Skeleton className="absolute -top-12 left-16 aspect-video size-16 -translate-x-1/2 rounded-lg" />

          <Skeleton className="h-2 w-1/2" style={{ marginTop: '40px' }} />
          <Skeleton className="h-2 w-1/3" />

          <Skeleton className="h-[1px] w-11/12" />

          <div className="w-full inline-flex items-center gap-1">
            <Skeleton className="h-2 w-10" />
            <Skeleton className="h-2 grow" />
            <Skeleton className="h-2 w-10" />
          </div>
        </CardFooter>
      </Card>
    );
  } else {
    const { currentlyPlaying, recentlyPlayed, userProfile } = data!;

    const trackURL =
      currentlyPlaying?.item?.external_urls.spotify ??
      recentlyPlayed?.track?.external_urls.spotify;
    const trackName =
      currentlyPlaying?.item?.name ?? recentlyPlayed?.track?.name;
    const trackArtists =
      currentlyPlaying?.item?.artists ?? recentlyPlayed?.track?.artists;

    const trackImage =
      currentlyPlaying?.item?.album?.images[0].url ??
      recentlyPlayed?.track?.album?.images[0].url;

    return (
      <Card className="flex flex-col h-full border-none mt-0 lg:ml-9 rounded-none">
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

          <Link href={userProfile?.external_urls.spotify} target="_blank">
            <Avatar className="size-9 absolute right-2 top-2">
              <AvatarImage
                src={userProfile.images[1].url}
                className="object-cover"
                alt={userProfile.display_name}
              />
            </Avatar>
          </Link>
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
  }
};
