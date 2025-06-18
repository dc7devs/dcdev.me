import { Artist } from '@/@types/spotify';
import Link from 'next/link';

export const Artists = ({ data }: { data: Array<Artist> }) => {
  const trackArtists = data;

  return (
    <div className="text-muted-foreground mt-1 inline-flex w-full gap-1 truncate text-sm">
      {trackArtists?.map((artist: Artist, index: number) => (
        <div className="max-w-max" key={index}>
          <Link
            className="font-inter font-normal hover:underline"
            href={artist.external_urls.spotify}
            target="_blank"
          >
            {artist.name}
          </Link>

          {index < trackArtists.length - 1 ? ', ' : ''}
        </div>
      ))}
    </div>
  );
};
