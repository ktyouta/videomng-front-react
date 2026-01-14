const VIDEO_BASE_URL: string = `https://www.youtube.com/watch?v=`;

export function playVideo(videoId: string) {

    const url = videoId ? `${VIDEO_BASE_URL}${videoId}` : ``;

    if (!url) {
        return;
    }

    window.open(url, `_blank`, 'noopener,noreferrer');
}