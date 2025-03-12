import { useAtomValue } from "jotai";
import { videoIdAtom } from "../Atom/FavoriteAtom";

export function useFavorite() {

    const videoId = useAtomValue(videoIdAtom);

    return {
        videoId
    }
}