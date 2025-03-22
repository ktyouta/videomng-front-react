import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { VideoListResponseType } from "../Type/VideoListResponseType";
import { keywordAtom, showMoreDataAtom, videoApiUrlAtom, videoListDataAtom, videoTypeSelectValueAtom } from "../Atom/HomeAtom";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { VideoListDataType } from "../Type/VideoListDataType";
import { VideoListApiUrlModel } from "../Model/VideoListApiUrlModel";
import { isEqual } from "lodash";
import { ShowMoreDataType } from "../Type/ShowMoreDataType";


export function useHomeVideoArea() {

    // 動画取得用URL
    const [videoApiUrl, setVideoApiUrl] = useAtom(videoApiUrlAtom);
    // 動画リスト
    const [videoListData, setVideoListData] = useAtom(videoListDataAtom);
    // 動画リスト追加読み込み用
    const [showMoreData, setShowMoreData] = useAtom(showMoreDataAtom);
    // 検索キーワード
    const keyword = useAtomValue(keywordAtom);
    // 動画種別選択値
    const videoTypeSelectValue = useAtomValue(videoTypeSelectValueAtom);


    // 動画一覧を取得
    const { isLoading } = useQueryWrapper<VideoListResponseType>(
        {
            url: videoApiUrl,
            afSuccessFn: (response: VideoListResponseType) => {

                // 動画リスト追加読み込み情報変更チェック
                const isChangeShowMoreData = isEqual(showMoreData, {
                    keyword,
                    videoTyep: videoTypeSelectValue
                });

                setVideoListData((e) => {

                    const videoListData = response.data;
                    // 現在画面表示されている動画リスト
                    const nowVideoItems = e?.items ?? [];
                    // 新たに取得した動画リスト
                    const newVideoItems = videoListData.items;
                    // 次に画面に表示する動画リスト
                    const latestVideoItems = !isChangeShowMoreData ? newVideoItems : [...nowVideoItems, ...newVideoItems];

                    const latestResponse: VideoListDataType = {
                        ...videoListData,
                        items: latestVideoItems
                    }

                    return latestResponse;
                });

                const latestShowMoreData: ShowMoreDataType = {
                    keyword: keyword,
                    videoType: videoTypeSelectValue
                }

                // 動画リスト追加読み込み用データが更新されている場合
                if (!isChangeShowMoreData) {
                    setShowMoreData(latestShowMoreData);
                }

                setVideoApiUrl(``);
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
                alert(errRes.response.data.message);
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
        const videoType = showMoreData?.videoType;

        if (!keyword || !videoType) {
            alert(`動画を取得できません`);
            return;
        }

        const videoListApiUrlModel = new VideoListApiUrlModel(keyword, videoType, nextPageToken);
        const videoApiUrl = videoListApiUrlModel.videoMngApiPath;
        setVideoApiUrl(`${videoApiUrl}`);
    }

    return {
        videoListData,
        isLoading,
        clickShowMore,
    }
}