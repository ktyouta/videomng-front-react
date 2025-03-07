export class VideoUrlModel {

    private static readonly VIDEO_BASE_URL: string = `https://www.youtube.com/watch?v=`;
    private readonly _videoUrl: string;

    constructor(videoId: string) {

        this._videoUrl = `${VideoUrlModel.VIDEO_BASE_URL}${videoId}`;
    }

    get videoUrl() {
        return this._videoUrl;
    }
}