import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useQueryWrapper from "../../../../../../hooks/useQueryWrapper";
import { VideoListResponseType } from "../../../../types/videolist/VideoListResponseType";
import { errResType } from "../../../../../../hooks/useMutationWrapperBase";
import { VideoListDataType } from "../../../../types/videolist/VideoListDataType";
import { isEqual } from "lodash";
import { ShowMoreDataType } from "../../../../types/videolist/ShowMoreDataType";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useFavoriteKeyword } from "../default/useFavoriteKeyword";
import { FAVORITE_KEYWORD } from "../../../../const/HomeConst";
import { useLocation } from "react-router-dom";
import { mediaQuery, useMediaQuery } from "../../../../../../hooks/useMediaQuery";
import { useHomeVideoSearchConditionValue } from "../../useHomeVideoSearchConditionValue";
import { useHomeVideoNowSearchConditionValue } from "../../../useHomeVideoNowSearchConditionValue";
import { useHomeVideoListEndpoint } from "./useHomeVideoListEndpoint";


export function useHomeVideoAreaResult() {

    // 動画リスト
    const [videoListData, setVideoListData] = useState<VideoListDataType>();
    // 現在の動画検索条件
    const { nowSearchCondition } = useHomeVideoNowSearchConditionValue();

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

    return {
        videoListData,
        isLoading,
        nowSearchCondition,
        isFetching,
        isError,
    }
}