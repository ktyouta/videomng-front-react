import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { videoCategoryAtom } from "../../Main/Atom/MainAtom";
import { useMemo, useState } from "react";
import { EDIT_MODE } from "../Const/FavoriteConst";

export function useFavoriteDetailSetting() {

    // 動画カテゴリ
    const videoCategory = useAtomValue(videoCategoryAtom);
    // 編集モード
    const [editMode, setEditMode] = useState(EDIT_MODE.VIEW);

    // カテゴリリスト
    const categoryList = useMemo(() => {

        if (!videoCategory) {
            return;
        }

        const items = videoCategory.items.map((e) => {
            const label = e.snippet.title;
            const value = e.id;

            return {
                label: label,
                value: value,
            }
        });

        return items;

    }, [videoCategory]);

    return {
        categoryList,
        editMode,
        setEditMode
    };
}