import { Artist } from '@/@types';
import Link from 'next/link';

export const Artists = ({ data }: { data: Array<Artist> }) => {
  const trackArtists = data;

  return (
    <div className="text-sm text-muted-foreground mt-1 inline-flex gap-1 truncate w-full">
      {trackArtists?.map((artist: Artist, index: number) => (
        <div className="max-w-max" key={index}>
          <Link
            className="hover:underline font-inter font-normal"
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
