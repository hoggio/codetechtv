export const channelId = 'UCSTOp5FPjNXBmop3o47yZaQ';
export const uploadsId = 'UUSTOp5FPjNXBmop3o47yZaQ';
export const defaultVid = 'ao2v2UpCIM4&t=30s';
export const playlistId = 'PLQnhPm2EJkhbo0nZHOblRzlQIzPhIMXvd';
export const YOUTUBE_PLAYLISTS_API = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelId}`;
export const YOUTUBE_PLAYLIST_ITEMS_API = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50`;
export const YOUTUBE_ALL_VIDEOS_API = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${uploadsId}&part=snippet&maxResults=50`;
