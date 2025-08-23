import { useAtomValue, useSetAtom } from "jotai";
import { favoriteVideoMemoListAtom } from "../../../Atom/FavoriteAtom";
import { useState } from "react";
import useMutationWrapper from "../../../../Common/Hook/useMutationWrapper";
import ENV from "../../../../env.json";
import { errResType, resType } from "../../../../Common/Hook/useMutationWrapperBase";
import { DeleteToFavoriteVideoMemoReqestType } from "../../../Type/VideoDetail/VideoMemo/DeleteToFavoriteVideoMemoReqestType";
import { FavoriteVideoMemoType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoType";
import useSwitch from "../../../../Common/Hook/useSwitch";



export function useFavoriteMemoEditIconArea() {

    // 編集ナビゲーション表示フラグ
    const { flag: isOpenEditNav, on: openEditNav, off: closeEditNav } = useSwitch();

    return {
        isOpenEditNav,
        openEditNav,
        closeEditNav,
    }
}