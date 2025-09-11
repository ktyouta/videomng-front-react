import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useQueryWrapper from "../../../Common/Hook/useQueryWrapper";
import { VideoListResponseType } from "../../Type/VideoList/VideoListResponseType";
import { errResType } from "../../../Common/Hook/useMutationWrapperBase";
import { VideoListDataType } from "../../Type/VideoList/VideoListDataType";
import { isEqual } from "lodash";
import { ShowMoreDataType } from "../../Type/VideoList/ShowMoreDataType";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useFavoriteKeyword } from "./useFavoriteKeyword";
import { FAVORITE_KEYWORD } from "../../Const/HomeConst";
import { useLocation } from "react-router-dom";
import { mediaQuery, useMediaQuery } from "../../../Common/Hook/useMediaQuery";
import { useHomeVideoSearchConditionValue } from "./useHomeVideoSearchConditionValue";
import { useHomeVideoNowSearchConditionValue } from "../useHomeVideoNowSearchConditionValue";
import { useHomeVideoListEndpoint } from "./useHomeVideoListEndpoint";


export function useHomeVideoAreaResult() {

    // 動画リスト
    const [videoListData, setVideoListData] = useState<VideoListDataType>();
    // URL情報
    const location = useLocation();
    // 前回のクエリパラメータを保持用
    const prevSearch = useRef(location.search);
    // 現在の動画検索条件
    const {
        nowSearchCondition,
        reset: resetNowCondition } = useHomeVideoNowSearchConditionValue();

    // 動画一覧を取得
    const { isLoading, isFetching, isError } = useQueryWrapper<VideoListResponseType>(
        {
            url: useHomeVideoListEndpoint(),
            afSuccessFn: (response: VideoListResponseType) => {

                // 動画リスト追加読み込み情報変更チェック
                const isEqualShowMoreData = !!nowSearchCondition.nextPageToken;

                setVideoListData((e) => {

                    const videoListData = response.data;
                    // 現在画面表示されている動画リスト
                    const nowVideoItems = e?.items ?? [];
                    // 新たに取得した動画リスト
                    const newVideoItems = videoListData.items;
                    // 次に画面に表示する動画リスト
                    const latestVideoItems = isEqualShowMoreData ? [...nowVideoItems, ...newVideoItems] : newVideoItems;

                    const latestResponse: VideoListDataType = {
                        ...videoListData,
                        items: latestVideoItems
                    }

                    return latestResponse;
                });
            },
            afErrorFn: (res) => {
            }
        }
    );

    // クエリパラメータが存在しない場合はホーム画面を初期化する
    useEffect(() => {

        if (prevSearch.current && !location.search) {

            resetNowCondition();
            setVideoListData(undefined);
        }

        prevSearch.current = location.search;
    }, [location.search]);

    return {
        videoListData,
        isLoading,
        nowSearchCondition,
        isFetching,
        isError,
    }
}