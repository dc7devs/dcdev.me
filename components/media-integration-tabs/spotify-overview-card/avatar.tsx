import { User } from '@/@types';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

// import { fetchWithAuthorization, getAcessToken } from '@/lib/spotify';

export const AvatarSpotifyProfile = ({ data }: { data: User }) => {
  const userProfileData = data;

  return (
    <Link href={userProfileData?.external_urls.spotify} target="_blank">
      <Avatar className="size-9 absolute right-2 top-2">
        <AvatarImage
          src={userProfileData.images[1].url}
          className="object-cover"
          alt={userProfileData.display_name}
        />
      </Avatar>
    </Link>
  );
};

// const getUserData = async () => {
//   const { access_token } = await getAcessToken();

//   const userData: User = await fetchWithAuthorization(
//     'https://api.spotify.com/v1/me',
//     access_token
//   );

//   return userData;
// };
