import { useAtomValue, useSetAtom } from "jotai";
import { favoriteVideoMemoListAtom } from "../Atom/FavoriteAtom";
import { useState } from "react";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import ENV from "../../env.json";
import { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import { DeleteToFavoriteVideoMemoReqestType } from "../Type/DeleteToFavoriteVideoMemoReqestType";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import useSwitch from "../../Common/Hook/useSwitch";



export function useFavoriteMemoDeleteIconArea() {

    // 削除ナビゲーション表示フラグ
    const { flag: isOpenDeleteNav, on: openDeleteNav, off: closeDeleteNav } = useSwitch();

    return {
        isOpenDeleteNav,
        openDeleteNav,
        closeDeleteNav,
    }
}