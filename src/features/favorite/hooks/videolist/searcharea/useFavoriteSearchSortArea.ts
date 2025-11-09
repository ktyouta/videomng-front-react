import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useSwitch from "../../../../../hooks/useSwitch";
import useQueryWrapper from "../../../../../hooks/useQueryWrapper";
import { FavoriteVideoSortListResponseType } from "../../../types/videolist/FavoriteVideoSortListResponseType";
import { VIDEO_MNG_PATH } from "../../../../../consts/CommonConst";
import ENV from "../../../../../env.json";
import { errResType } from "../../../../../hooks/useMutationWrapperBase";
import { useState } from "react";
import { FavoriteVideoSortType } from "../../../types/videolist/FavoriteVideoSortType";
import { comboType } from "../../../../../components/ComboComponent";
import { useNavigate } from "react-router-dom";
import { mediaQuery, useMediaQuery } from "../../../../../hooks/useMediaQuery";
import { INIT_PAGE, useFavoriteVideoSearchConditionValue } from "../../useFavoriteVideoSearchConditionValue";
import { useCreateFavoriteVideoListQuery } from "../../useCreateFavoriteVideoListQuery";
import { useReplaceQuery } from "../../../../../hooks/useReplaceQuery";
import { useSortList } from "../../../../content/hooks/useSortList";


export function useFavoriteSearchSortArea() {

    // 検索条件
    const {
        selectedFavoriteVideoSortKey,
        setSelectedFavoriteVideoSortKey,
        resetPage } = useFavoriteVideoSearchConditionValue();
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
            sortkey: value,
            page: INIT_PAGE
        });

        // クエリパラメータを更新
        replace(newQuery);

        setSelectedFavoriteVideoSortKey(value);
        resetPage();
    }

    return {
        sortList,
        selectSort,
        selectedFavoriteVideoSortKey,
        isMobile,
    }
}