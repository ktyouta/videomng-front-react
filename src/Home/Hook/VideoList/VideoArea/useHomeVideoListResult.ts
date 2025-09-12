import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useQueryWrapper from "../../../../Common/Hook/useQueryWrapper";
import { VideoListResponseType } from "../../../Type/VideoList/VideoListResponseType";
import { errResType } from "../../../../Common/Hook/useMutationWrapperBase";
import { VideoListDataType } from "../../../Type/VideoList/VideoListDataType";
import { isEqual } from "lodash";
import { ShowMoreDataType } from "../../../Type/VideoList/ShowMoreDataType";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useFavoriteKeyword } from "./useFavoriteKeyword";
import { FAVORITE_KEYWORD } from "../../../Const/HomeConst";
import { useLocation } from "react-router-dom";
import { mediaQuery, useMediaQuery } from "../../../../Common/Hook/useMediaQuery";
import { useHomeVideoSearchConditionValue } from "../useHomeVideoSearchConditionValue";
import { useHomeVideoNowSearchConditionValue } from "../../useHomeVideoNowSearchConditionValue";
import { useHomeVideoListEndpoint } from "./useHomeVideoListEndpoint";


export function useHomeVideoListResult() {

    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);
    // 現在の動画検索条件
    const { setNowSearchCondition } = useHomeVideoNowSearchConditionValue();

    /**
     * もっと見るボタン押下
     * @param nextPageToken 
     */
    function clickShowMore(nextPageToken: string) {

        // 現在の検索条件を更新する
        setNowSearchCondition((e) => {

            return {
                ...e,
                nextPageToken
            };
        });
    }

    return {
        isMobile,
        clickShowMore,
    }
}