import { useAtomValue } from "jotai";
import { videoIdAtom } from "../Atom/HomeAtom";

export function useHome() {

    const videoId = useAtomValue(videoIdAtom);

    return {
        videoId
    }
}