import { useAtomValue } from "jotai";
import { favoriteVideoIdAtom } from "../Atom/FavoriteAtom";

export function useFavorite() {

    const favoriteVideoId = useAtomValue(favoriteVideoIdAtom);

    return {
        favoriteVideoId
    }
}