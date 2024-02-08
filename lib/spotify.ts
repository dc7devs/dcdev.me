import axios from 'axios';

const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN!;
const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

const authBasic = Buffer.from(`${client_id}:${client_secret}`).toString(
  'base64'
);

export const getAcessToken = async () => {
  if (!refresh_token || !client_id || !client_secret) {
    throw new Error('Spotify credentials are missing');
  }

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${authBasic}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      next: {
        revalidate: 60 * 1
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token
      })
    });

    if (!response.ok) {
      // throw new Error(`Failed to refresh token: ${response.statusText}`);
      console.error(`Failed to refresh token: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error refreshing access token:', error);
    throw error;
  }
};

export const fetchWithAuthorization = async (url: string) => {
  const { access_token } = await getAcessToken();

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json'
    }
  });

  return response.data;
};
