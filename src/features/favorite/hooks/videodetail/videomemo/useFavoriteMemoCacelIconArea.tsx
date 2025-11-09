import { useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import ENV from "../../../../../env.json";
import { errResType, resType } from "../../../../../hooks/useMutationWrapperBase";
import { DeleteToFavoriteVideoMemoReqestType } from "../../../types/videodetail/videomemo/DeleteToFavoriteVideoMemoReqestType";
import { FavoriteVideoMemoType } from "../../../types/videodetail/videomemo/FavoriteVideoMemoType";
import useSwitch from "../../../../../hooks/useSwitch";



export function useFavoriteMemoCacelIconArea() {

    // キャンセルナビゲーション表示フラグ
    const { flag: isOpenCancelNav, on: openCancelNav, off: closeCancelNav } = useSwitch();

    return {
        isOpenCancelNav,
        openCancelNav,
        closeCancelNav,
    }
}