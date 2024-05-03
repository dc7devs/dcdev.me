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
import { SpotifyData } from '@/@types/spotify';
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
      staleTime: 1000 * (60 * 1.5), // 1min 30s
      refetchOnWindowFocus: false
    }
  );

  if (error) {
    return (
      <Card className="mt-0 flex h-full flex-col rounded-none border-none lg:ml-9">
        <CardContent className="flex h-full items-center justify-center p-6">
          <p className="text-xs font-medium text-red-400">
            Oops! Something&#39;s wrong with that component!
          </p>
        </CardContent>
      </Card>
    );
  }

  if (isFetching) {
    return (
      <Card className="mt-0 flex h-full flex-col rounded-none border-none lg:ml-9">
        <CardContent className="relative h-28 overflow-hidden p-0">
          <Skeleton className="h-28 w-full rounded-none" />
        </CardContent>

        <CardFooter className="relative block space-y-4">
          <Skeleton className="absolute -top-12 left-16 aspect-video size-16 -translate-x-1/2 rounded-lg" />

          <Skeleton className="h-2 w-1/2" style={{ marginTop: '40px' }} />
          <Skeleton className="h-2 w-1/3" />

          <Skeleton className="h-[1px] w-11/12" />

          <div className="inline-flex w-full items-center gap-1">
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

    const isPlaying = currentlyPlaying?.is_playing ?? false;

    return (
      <Card className="mt-0 flex h-full flex-col rounded-none border-none lg:ml-9">
        <CardContent className="relative h-28 overflow-hidden p-0">
          {trackImage && (
            <Image
              alt="Muggs Shop"
              className="absolute left-0 top-0 w-full rounded object-cover object-center brightness-75"
              src={trackImage}
              fill
            />
          )}
          <Badge
            className={cn(
              'absolute left-2 top-2',
              isPlaying
                ? 'bg-green-400 text-black hover:bg-green-400'
                : 'bg-primary/80 text-background hover:bg-primary/80'
            )}
          >
            {isPlaying ? 'Currently playing' : 'Recently played'}
          </Badge>

          <Link href={userProfile?.external_urls.spotify} target="_blank">
            <Avatar className="absolute right-2 top-2 size-9">
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
              src={trackImage}
              height={500}
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
              className={cn(isPlaying ? 'text-green-400' : 'text-primary')}
            />
          </div>
          <Separator className="bg-secondary" />

          {currentlyPlaying && isPlaying ? (
            <ProgressBarDefault data={currentlyPlaying} />
          ) : (
            <ProgressBarStatic />
          )}
        </CardFooter>
      </Card>
    );
  }
};
