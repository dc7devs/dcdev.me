import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import Icons from '@/components/ui/icons';

export const GithubOverviewCard = async () => {
  const res = await fetch('https://api.github.com/users/dc7devs');
  const data = await res.json();

  return (
    <Card className="mt-0 flex h-full flex-col border-none sm:rounded-none lg:ml-9">
      <CardContent className="relative h-28 overflow-hidden p-0">
        <Image
          alt="Muggs Shop"
          className="absolute left-0 top-0 w-full rounded object-cover object-center brightness-75"
          src="https://res.cloudinary.com/dyxtcsnna/image/upload/v1706989464/dcdev/code_tavjxu.png"
          fill
        />
      </CardContent>

      <CardFooter className="relative block space-y-4">
        <Image
          alt="avatar dcdevs"
          className="absolute -top-14 left-1/2 aspect-video size-28 -translate-x-1/2 rounded-full object-cover sm:size-20"
          src={data.avatar_url}
          height={100}
          width={100}
        />

        <div className="flex w-full justify-between">
          <div>
            <p className="text-base">{data.name}</p>
            <p className="text-sm text-foreground/50">{data.login}</p>
          </div>
          <Link href={data.html_url} target="_blank">
            <span className="sr-only">Github Link</span>
            <Icons.GithubIconFill className="text-black dark:text-[#e6edf2ff]" />
          </Link>
        </div>

        <Separator className="bg-secondary" />

        <div className="flex flex-wrap gap-2">
          <Badge className="space-x-2" variant="secondary">
            <Icons.FlowbiteUsersGroupSolid />
            <span>{data.followers} Followers</span>
          </Badge>
          <Badge className="space-x-2" variant="secondary">
            <Icons.RiGitRepositoryFill />
            <span>{data.public_repos} Repositories</span>
          </Badge>
          <Badge className="space-x-2" variant="secondary">
            <Icons.MaterialSymbolsLightFolder />
            <span>{data.public_gists} Gists</span>
          </Badge>
        </div>
      </CardFooter>
    </Card>
  );
};
