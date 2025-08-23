import { useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import useMutationWrapper from "../../../../Common/Hook/useMutationWrapper";
import ENV from "../../../../env.json";
import { errResType, resType } from "../../../../Common/Hook/useMutationWrapperBase";
import { DeleteToFavoriteVideoMemoReqestType } from "../../../Type/VideoDetail/VideoMemo/DeleteToFavoriteVideoMemoReqestType";
import { FavoriteVideoMemoType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoType";
import useSwitch from "../../../../Common/Hook/useSwitch";
import { FavoriteVideoIdContext } from "../../../Component/Favorite";
import { toast } from "react-toastify";
import { VIDEO_MNG_PATH } from "../../../../Common/Const/CommonConst";
import { useFavoriteMemoIdEndpoint } from "./useFavoriteMemoIdEndpoint";
import { useInvalidateQuery } from "../../../../Common/Hook/useInvalidateQuery";
import { useFavoriteMemoEndpoint } from "./useFavoriteMemoEndpoint";



export function useFavoriteMemoContent() {

    // メモ編集エリアの切り替えフラグ
    const { flag: isOpenEdit, on: openEdit, off: closeEdit } = useSwitch();

    return {
        isOpenEdit,
        openEdit,
        closeEdit,
    }
}