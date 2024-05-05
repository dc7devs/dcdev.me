import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icons from '../ui/icons';

import { GithubOverviewCard } from './github-overview-card';
import { SpotifyOverviewCard } from './spotify-overview-card';
import { LeetCodeOverviewCard } from './leetcode-overview-card';

export const MediaTabs = () => {
  return (
    <Tabs
      defaultValue="spotify"
      className="relative flex h-full w-full flex-col bg-transparent pt-9 lg:p-0"
    >
      <TabsList className="absolute top-0 z-20 h-auto w-auto gap-1 rounded-tl-none p-0.5 lg:flex-col">
        <TabsTrigger
          className="m-0 size-full p-1"
          value="spotify"
          name="spotify option"
        >
          <Icons.BiSpotify className="size-4" />
        </TabsTrigger>

        <TabsTrigger
          className="m-0 size-full p-1"
          value="github"
          name="github option"
        >
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
      className="relative flex h-full w-full flex-col bg-white/50 px-1 pb-1 pt-9 ring-1 ring-input backdrop-blur-sm dark:bg-black/50"
    >
      <TabsList className="absolute top-0 z-20 h-auto w-auto gap-1 rounded-tl-none p-0.5">
        <TabsTrigger
          className="m-0 size-full p-1"
          value="hackerrank"
          name="hackerrank option"
        >
          <Icons.Fa6BrandsHackerrank className="size-4" />
        </TabsTrigger>

        <TabsTrigger
          className="m-0 size-full p-1"
          value="leetcode"
          name="leetcode option"
        >
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
