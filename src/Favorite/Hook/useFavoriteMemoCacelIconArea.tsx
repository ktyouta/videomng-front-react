import { useAtomValue, useSetAtom } from "jotai";
import { favoriteVideoMemoListAtom } from "../Atom/FavoriteAtom";
import { useState } from "react";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import ENV from "../../env.json";
import { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import { DeleteToFavoriteVideoMemoReqestType } from "../Type/DeleteToFavoriteVideoMemoReqestType";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import useSwitch from "../../Common/Hook/useSwitch";



export function useFavoriteMemoCacelIconArea() {

    // キャンセルナビゲーション表示フラグ
    const { flag: isOpenCancelNav, on: openCancelNav, off: closeCancelNav } = useSwitch();

    return {
        isOpenCancelNav,
        openCancelNav,
        closeCancelNav,
    }
}