import { useAtomValue } from "jotai";
import { useState } from "react";

export function useHome() {

    // 動画ID
    const [videoId, setVideoId] = useState(``);

    return {
        videoId,
        setVideoId,
    }
}