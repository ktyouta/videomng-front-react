import { useAtomValue } from "jotai";
import { favoriteVideoIdAtom } from "../Atom/FavoriteAtom";

export function useFavorite() {

    // お気に入り動画ID
    const favoriteVideoId = useAtomValue(favoriteVideoIdAtom);

    return {
        favoriteVideoId
    }
}