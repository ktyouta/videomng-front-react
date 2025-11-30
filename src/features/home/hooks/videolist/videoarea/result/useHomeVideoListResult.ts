import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useQueryWrapper from "../../../../../../hooks/useQueryWrapper";
import { VideoListResponseType } from "../../../../types/videolist/VideoListResponseType";
import { errResType } from "../../../../../../hooks/useMutationWrapperBase";
import { VideoListDataType } from "../../../../types/videolist/VideoListDataType";
import { isEqual } from "lodash";
import { ShowMoreDataType } from "../../../../types/videolist/ShowMoreDataType";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useFavoriteKeyword } from "../default/useFavoriteKeyword";
import { FAVORITE_KEYWORD } from "../../../../const/HomeConst";
import { useLocation } from "react-router-dom";
import { mediaQuery, useMediaQuery } from "../../../../../../hooks/useMediaQuery";
import { useHomeVideoSearchConditionValue } from "../../useHomeVideoSearchConditionValue";
import { useHomeVideoNowSearchConditionValue } from "../../../useHomeVideoNowSearchConditionValue";
import { useHomeVideoListEndpoint } from "./useHomeVideoListEndpoint";
import { useInView } from 'react-intersection-observer';


type propsType = {
    videoListData: VideoListDataType,
    isLoading: boolean,
}

export function useHomeVideoListResult(props: propsType) {

    // 現在の動画検索条件
    const { setNowSearchCondition } = useHomeVideoNowSearchConditionValue();
    // 無限スクロール用
    const { ref, inView } = useInView({
        threshold: 0.3,
    });

    /**
     * 次データ取得
     * @param nextPageToken 
     */
    function getNextData(nextPageToken: string) {

        // 現在の検索条件を更新する
        setNowSearchCondition((e) => {

            return {
                ...e,
                nextPageToken
            };
        });
    }

    /**
     * 画面下までスクロールしたら次データを取得する
     */
    useEffect(() => {

        if (!inView) {
            return;
        }

        if (props.isLoading) {
            return;
        }

        if (!props.videoListData.nextPageToken) {
            return;
        }

        getNextData(props.videoListData.nextPageToken);
    }, [inView]);

    return {
        ref,
    }
}