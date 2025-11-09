import { useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import ENV from "../../../../../env.json";
import { errResType, resType } from "../../../../../hooks/useMutationWrapperBase";
import { DeleteToFavoriteVideoMemoReqestType } from "../../../types/videodetail/videomemo/DeleteToFavoriteVideoMemoReqestType";
import { FavoriteVideoMemoType } from "../../../types/videodetail/videomemo/FavoriteVideoMemoType";
import useSwitch from "../../../../../hooks/useSwitch";



export function useFavoriteMemoEditIconArea() {

    // 編集ナビゲーション表示フラグ
    const { flag: isOpenEditNav, on: openEditNav, off: closeEditNav } = useSwitch();

    return {
        isOpenEditNav,
        openEditNav,
        closeEditNav,
    }
}