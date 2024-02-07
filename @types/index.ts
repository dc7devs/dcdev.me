type ExternalUrls = {
  spotify: string;
};

export type Artist = {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

type Image = {
  height: number;
  url: string;
  width: number;
};

type Album = {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
};

type Track = {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: { isrc: string };
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
};

type Item = {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: { isrc: string };
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
};

export type CurrentlyPlaying = {
  device: {
    name: string;
    type: string;
  };
  timestamp: number;
  progress_ms: number;
  is_playing: boolean;
  item: Item;
};

type Context = {
  type: string;
  external_urls: ExternalUrls;
  href: string;
  uri: string;
};

export type RecentlyPlayed = {
  track: Track;
  played_at: string;
  context: Context;
};

export type User = {
  display_name: string;
  external_urls: ExternalUrls;
  images: Image[];
};

export type SpotifyData = {
  currentlyPlaying: CurrentlyPlaying | null;
  recentlyPlayed: RecentlyPlayed;
  userProfile: User;
};
