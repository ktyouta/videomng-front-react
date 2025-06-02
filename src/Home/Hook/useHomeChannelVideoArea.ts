import { useAtom, useAtomValue } from "jotai";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json"
import { useState } from "react";
import { ChannelIdContext } from "../Component/Home";
import { toast } from "react-toastify";
import { ChannelVideoListResponseType } from "../Type/ChannelVideoListResponseType";
import { VideoListDataType } from "../Type/VideoListDataType";


export function useHomeChannelVideoArea() {

    // 動画リスト
    const [videoListData, setVideoListData] = useState<VideoListDataType>();
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // チャンネルID
    const channelId = ChannelIdContext.useCtx();


    // チャンネル動画一覧を取得
    const { isLoading } = useQueryWrapper<ChannelVideoListResponseType>(
        {
            url: channelId ? `${VIDEO_MNG_PATH}${ENV.CHANNEL_VIDEO_INFO}/${channelId}` : ``,
            afSuccessFn: (response: ChannelVideoListResponseType) => {

                setVideoListData((e) => {

                    const videoListData = response.data;
                    // 現在画面表示されている動画リスト
                    const nowVideoItems = e?.items ?? [];
                    // 新たに取得した動画リスト
                    const newVideoItems = videoListData.items;
                    // 次に画面に表示する動画リスト
                    const latestVideoItems = newVideoItems;

                    const latestResponse: VideoListDataType = {
                        ...videoListData,
                        items: latestVideoItems
                    }

                    return latestResponse;
                });

                setErrMessage(``);
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
                setErrMessage(`動画情報の取得に失敗しました`);
            }
        }
    );

    return {
        videoListData,
        isLoading,
        errMessage,
    }
}