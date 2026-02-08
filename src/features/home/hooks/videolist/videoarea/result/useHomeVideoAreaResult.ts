import { useState } from "react";
import { VideoListDataType } from "../../../../../../types/videolist/VideoListDataType";
import { getVideoList } from "../../../../api/getVideoList";
import { VideoListResponseType } from "../../../../types/videolist/VideoListResponseType";
import { useHomeVideoNowSearchConditionValue } from "../../../useHomeVideoNowSearchConditionValue";
import { useCreateHomeVideoListQuery } from "../../useCreateHomeVideoListQuery";


export function useHomeVideoAreaResult() {

    // 動画リスト
    const [videoListData, setVideoListData] = useState<VideoListDataType>();
    // 現在の動画検索条件
    const { nowSearchCondition } = useHomeVideoNowSearchConditionValue();
    // クエリ作成用
    const { create } = useCreateHomeVideoListQuery({ nowSearchCondition });

    // 動画一覧を取得
    const { isLoading, isFetching, isError } = getVideoList({
        queryString: create({}),
        nowSearchCondition,
        onSuccess: (response: VideoListResponseType) => {
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
    });

    return {
        videoListData,
        isLoading,
        nowSearchCondition,
        isFetching,
        isError,
    }
}