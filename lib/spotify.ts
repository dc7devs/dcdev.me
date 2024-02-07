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
        revalidate: 10
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

export const getDataSpotify = async () => {
  const { access_token } = await getAcessToken();

  try {
    const [currentlyPlayingData, recentlyPlayedData, userProfile] =
      await Promise.all([
        fetchWithAuthorization(
          'https://api.spotify.com/v1/me/player/currently-playing',
          access_token,
          {
            next: {
              revalidate: 60 * 1
            }
          }
        ),
        fetchWithAuthorization(
          'https://api.spotify.com/v1/me/player/recently-played?limit=1',
          access_token,
          {
            next: {
              revalidate: 60 * 1
            }
          }
        ),
        fetchWithAuthorization('https://api.spotify.com/v1/me', access_token)
      ]);

    return {
      currentlyPlaying: currentlyPlayingData,
      recentlyPlayed: recentlyPlayedData.items[0],
      userProfile: userProfile
    };
  } catch (error) {
    console.error('Error fetching data from Spotify: ', error);
    throw error;
  }
};

export const fetchWithAuthorization = async (
  url: string,
  accessToken: string,
  options?: RequestInit,
  timeout = 10000
) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      headers: {
        ...options?.headers,
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      ...options,
      signal: controller.signal
    });

    if (!response.ok) {
      console.error(
        `API request failed with status ${response.status}: ${url}`
      );
      return null;
    }

    const text = await response.text();

    try {
      return text ? JSON.parse(text) : null;
    } catch (error) {
      console.error('Error parsing JSON from response: ', error);
      return null;
    }
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  } finally {
    clearTimeout(id);
  }
};
