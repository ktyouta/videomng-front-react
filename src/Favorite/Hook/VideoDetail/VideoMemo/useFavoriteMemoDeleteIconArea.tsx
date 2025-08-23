import { useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import useMutationWrapper from "../../../../Common/Hook/useMutationWrapper";
import ENV from "../../../../env.json";
import { errResType, resType } from "../../../../Common/Hook/useMutationWrapperBase";
import { DeleteToFavoriteVideoMemoReqestType } from "../../../Type/VideoDetail/VideoMemo/DeleteToFavoriteVideoMemoReqestType";
import { FavoriteVideoMemoType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoType";
import useSwitch from "../../../../Common/Hook/useSwitch";



export function useFavoriteMemoDeleteIconArea() {

    // 削除ナビゲーション表示フラグ
    const { flag: isOpenDeleteNav, on: openDeleteNav, off: closeDeleteNav } = useSwitch();

    return {
        isOpenDeleteNav,
        openDeleteNav,
        closeDeleteNav,
    }
}