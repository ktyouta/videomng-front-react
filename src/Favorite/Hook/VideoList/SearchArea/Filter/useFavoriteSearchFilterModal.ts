import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useSwitch from "../../../../../Common/Hook/useSwitch";
import useQueryWrapper from "../../../../../Common/Hook/useQueryWrapper";
import { FavoriteVideoSortListResponseType } from "../../../../Type/VideoList/FavoriteVideoSortListResponseType";
import { VIDEO_MNG_PATH } from "../../../../../Common/Const/CommonConst";
import ENV from "../../../../../env.json";
import { errResType } from "../../../../../Common/Hook/useMutationWrapperBase";
import { useState } from "react";
import { FavoriteVideoSortType } from "../../../../Type/VideoList/FavoriteVideoSortType";
import { comboType } from "../../../../../Common/Component/ComboComponent";
import { useNavigate } from "react-router-dom";
import { mediaQuery, useMediaQuery } from "../../../../../Common/Hook/useMediaQuery";
import { useFavoriteVideoSearchConditionValue } from "../../../useFavoriteVideoSearchConditionValue";


export function useFavoriteSearchFilterModal() {

    // 条件指定モーダルの表示フラグ
    const { flag: isOpenFilterModal, on: openFilterModal, off: closeFilterModal } = useSwitch();
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);


    return {
        isOpenFilterModal,
        openFilterModal,
        closeFilterModal,
        isMobile,
    }
}