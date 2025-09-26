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
import { useFavoriteVideoSearchConditionValue } from "../../useFavoriteVideoSearchConditionValue";
import { useCreateFavoriteVideoListQuery } from "../../useCreateFavoriteVideoListQuery";
import { useReplaceQuery } from "../../../../Common/Hook/useReplaceQuery";
import { useSortList } from "../../../../Content/Hook/useSortList";


export function useFavoriteSearchSortArea() {

    // 検索条件
    const {
        selectedFavoriteVideoSortKey,
        setSelectedFavoriteVideoSortKey, } = useFavoriteVideoSearchConditionValue();
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);
    // クエリ作成用
    const { create } = useCreateFavoriteVideoListQuery();
    // クエリパラメータ変更用
    const { replace } = useReplaceQuery();
    // ソートリストを取得
    const { data: sortList } = useSortList({
        isGetChache: true
    });

    /**
     * ソートリスト選択
     * @param value 
     */
    function selectSort(value: string) {

        const newQuery = create({
            sortkey: value
        });

        // クエリパラメータを更新
        replace(newQuery);

        setSelectedFavoriteVideoSortKey(value);
    }

    return {
        sortList,
        selectSort,
        selectedFavoriteVideoSortKey,
        isMobile,
    }
}