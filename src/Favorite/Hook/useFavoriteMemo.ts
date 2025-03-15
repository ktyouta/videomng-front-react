import { useAtomValue } from "jotai";
import { favoriteVideoMemoListAtom } from "../Atom/FavoriteAtom";
import { useState } from "react";

export function useFavoriteMemo() {

    // メモ情報
    const favoriteVideoMemoList = useAtomValue(favoriteVideoMemoListAtom);

    return {
        favoriteVideoMemoList,
    }
}