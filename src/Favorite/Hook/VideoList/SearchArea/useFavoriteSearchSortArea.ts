import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useSwitch from "../../../../Common/Hook/useSwitch";
import useQueryWrapper from "../../../../Common/Hook/useQueryWrapper";
import { FavoriteVideoSortListResponseType } from "../../../Type/VideoList/FavoriteVideoSortListResponseType";
import { VIDEO_MNG_PATH } from "../../../../Common/Const/CommonConst";
import ENV from "../../../../env.json";
import { errResType } from "../../../../Common/Hook/useMutationWrapperBase";
import { useState } from "react";
import { FavoriteVideoSortType } from "../../../Type/VideoList/FavoriteVideoSortType";
import { comboType } from "../../../../Common/Component/ComboComponent";
import { useNavigate } from "react-router-dom";
import { mediaQuery, useMediaQuery } from "../../../../Common/Hook/useMediaQuery";
import { useFavoriteVideoSearchConditionValue } from "../useFavoriteVideoSearchConditionValue";
import { useSyncFavoriteVideoListUrl } from "../useSyncFavoriteVideoListUrl";


export function useFavoriteSearchSortArea() {

    // 検索条件
    const {
        selectedFavoriteVideoSortKey,
        setSelectedFavoriteVideoSortKey, } = useFavoriteVideoSearchConditionValue();
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);


    // ソートリストを取得
    const { data: sortList } = useQueryWrapper<FavoriteVideoSortListResponseType, comboType[]>(
        {
            url: `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO_SORT}`,
            select: (res: FavoriteVideoSortListResponseType) => {

                return res.data.map((e: FavoriteVideoSortType) => {
                    return {
                        label: e.label,
                        value: e.id,
                    }
                });
            },
            afErrorFn: (res) => {
            }
        }
    );

    /**
     * ソートリスト選択
     * @param value 
     */
    function selectSort(value: string) {

        setSelectedFavoriteVideoSortKey(value);
    }

    return {
        sortList,
        selectSort,
        selectedFavoriteVideoSortKey,
        isMobile,
    }
}