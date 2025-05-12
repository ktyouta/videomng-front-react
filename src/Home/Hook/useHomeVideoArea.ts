import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { VideoListResponseType } from "../Type/VideoListResponseType";
import { keywordAtom, selectedVideoCategoryAtom, selectedVideoTypeAtom, showMoreDataAtom, videoListDataAtom } from "../Atom/HomeAtom";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { VideoListDataType } from "../Type/VideoListDataType";
import { VideoListApiUrlModel } from "../Model/VideoListApiUrlModel";
import { isEqual } from "lodash";
import { ShowMoreDataType } from "../Type/ShowMoreDataType";
import { useState } from "react";
import { SetVideoApiUrlContext, VideoApiUrlContext } from "../Component/Home";
import { toast } from "react-toastify";


export function useHomeVideoArea() {

    // 動画取得用URL
    const videoApiUrl = VideoApiUrlContext.useCtx();
    const setVideoApiUrl = SetVideoApiUrlContext.useCtx();
    // 動画リスト
    const [videoListData, setVideoListData] = useAtom(videoListDataAtom);
    // 動画リスト追加読み込み用
    const [showMoreData, setShowMoreData] = useAtom(showMoreDataAtom);
    // 検索キーワード
    const keyword = useAtomValue(keywordAtom);
    // 動画一覧検索条件選択値(種別)
    const selectedVideoType = useAtomValue(selectedVideoTypeAtom);
    // 動画一覧検索条件選択値(カテゴリ)
    const selectedVideoCategory = useAtomValue(selectedVideoCategoryAtom);
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);


    // 動画一覧を取得
    const { isLoading } = useQueryWrapper<VideoListResponseType>(
        {
            url: videoApiUrl,
            afSuccessFn: (response: VideoListResponseType) => {

                // 動画リスト追加読み込み情報変更チェック
                const latestShowMoreData: ShowMoreDataType = {
                    keyword: keyword,
                    videoType: selectedVideoType,
                    videoCategory: selectedVideoCategory,
                }
                const isEqualShowMoreData = isEqual(showMoreData, latestShowMoreData);

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

                setShowMoreData(latestShowMoreData);
                setVideoApiUrl(``);
                setErrMessage(``);
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
                setErrMessage(`動画情報の取得に失敗しました`);
                setVideoApiUrl(``);
                setShowMoreData(undefined);
            }
        }
    );

    /**
     * もっと見るボタン押下
     */
    function clickShowMore(nextPageToken: string) {

        const keyword = showMoreData?.keyword;
        const videoType = showMoreData?.videoType ?? ``;
        const videoCategory = showMoreData?.videoCategory ?? ``;

        if (!keyword) {
            toast.error(`動画を取得できません`);
            return;
        }

        const videoListApiUrlModel = VideoListApiUrlModel.create({
            keyword,
            videoType,
            nextPageToken,
            videoCategory
        });

        const videoApiUrl = videoListApiUrlModel.url;
        setVideoApiUrl(`${videoApiUrl}`);
    }

    return {
        videoListData,
        isLoading,
        clickShowMore,
        errMessage,
    }
}