import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icons from '../ui/icons';

import { GithubOverviewCard } from './github-overview-card';
import { SpotifyOverviewCard } from './spotify-overview-card';
import { LeetCodeOverviewCard } from './leetcode-overview-card';

export const MediaTabs = () => {
  return (
    <Tabs
      defaultValue="spotify"
      className="relative flex flex-col h-full w-full pt-9 lg:p-0 bg-transparent"
    >
      <TabsList className="absolute top-0 z-20 lg:flex-col h-auto w-auto rounded-tl-none gap-1 p-0.5">
        <TabsTrigger className="size-full p-1 m-0" value="spotify">
          <Icons.BiSpotify className="size-4" />
        </TabsTrigger>

        <TabsTrigger className="size-full p-1 m-0" value="github">
          <Icons.GithubIconFill className="size-4" />
        </TabsTrigger>
      </TabsList>

      <TabsContent className="m-0 grow" value="spotify">
        <SpotifyOverviewCard />
      </TabsContent>

      <TabsContent className="m-0 grow" value="github">
        <GithubOverviewCard />
      </TabsContent>
    </Tabs>
  );
};

export const ChallengeTabs = () => {
  return (
    <Tabs
      defaultValue="hackerrank"
      className="relative flex flex-col h-full w-full pt-9 bg-transparent"
    >
      <TabsList className="absolute top-0 z-20 h-auto w-auto rounded-bl-none gap-1 p-0.5">
        <TabsTrigger className="size-full p-1 m-0" value="hackerrank">
          <Icons.Fa6BrandsHackerrank className="size-4" />
        </TabsTrigger>

        <TabsTrigger className="size-full p-1 m-0" value="leetcode">
          <Icons.SimpleIconsLeetcode className="size-4" />
        </TabsTrigger>
      </TabsList>

      <TabsContent className="m-0 grow" value="hackerrank">
        <LeetCodeOverviewCard />
      </TabsContent>

      <TabsContent className="m-0 grow" value="leetcode">
        <LeetCodeOverviewCard />
      </TabsContent>
    </Tabs>
  );
};
