import { useAtomValue } from "jotai";
import { favoriteVideoMemoListAtom } from "../Atom/FavoriteAtom";
import { useState } from "react";

export function useFavoriteMemoInput() {

    // メモ入力情報
    const [inputMemo, setInputMemo] = useState(``);

    return {
        inputMemo,
        setInputMemo
    }
}