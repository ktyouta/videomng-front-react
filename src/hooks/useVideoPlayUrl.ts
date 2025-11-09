
const VIDEO_BASE_URL: string = `https://www.youtube.com/watch?v=`;

export function useVideoPlayUrl(videoId: string) {

    return videoId ? `${VIDEO_BASE_URL}${videoId}` : ``;
}