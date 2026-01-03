import { useParams } from "react-router-dom";

export function useVideoId() {

    // 動画ID
    const { videoId } = useParams<{ videoId: string }>();

    if (!videoId) {
        throw Error(`動画IDが存在しません。`);
    }

    return videoId;
}