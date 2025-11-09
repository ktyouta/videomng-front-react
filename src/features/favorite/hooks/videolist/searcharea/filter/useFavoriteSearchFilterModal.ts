import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useSwitch from "../../../../../../hooks/useSwitch";
import useQueryWrapper from "../../../../../../hooks/useQueryWrapper";
import { FavoriteVideoSortListResponseType } from "../../../../types/videolist/FavoriteVideoSortListResponseType";
import { VIDEO_MNG_PATH } from "../../../../../../consts/CommonConst";
import ENV from "../../../../../../env.json";
import { errResType } from "../../../../../../hooks/useMutationWrapperBase";
import { useState } from "react";
import { FavoriteVideoSortType } from "../../../../types/videolist/FavoriteVideoSortType";
import { comboType } from "../../../../../../components/ComboComponent";
import { useNavigate } from "react-router-dom";
import { mediaQuery, useMediaQuery } from "../../../../../../hooks/useMediaQuery";
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