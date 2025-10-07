import { useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import ENV from "../../../../env.json";
import { errResType, resType } from "../../../../Common/Hook/useMutationWrapperBase";
import { DeleteToFavoriteVideoMemoReqestType } from "../../../Type/VideoDetail/VideoMemo/DeleteToFavoriteVideoMemoReqestType";
import { FavoriteVideoMemoType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoType";
import useSwitch from "../../../../Common/Hook/useSwitch";



export function useFavoriteMemoCacelIconArea() {

    // キャンセルナビゲーション表示フラグ
    const { flag: isOpenCancelNav, on: openCancelNav, off: closeCancelNav } = useSwitch();

    return {
        isOpenCancelNav,
        openCancelNav,
        closeCancelNav,
    }
}