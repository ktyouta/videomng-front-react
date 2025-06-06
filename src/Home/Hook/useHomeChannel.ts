import { useAtom, useAtomValue } from "jotai";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json"
import { useEffect, useState } from "react";
import { ChannelIdContext } from "../Component/Home";
import { toast } from "react-toastify";
import { ChannelVideoListResponseType } from "../Type/ChannelVideoListResponseType";
import { VideoListDataType } from "../Type/VideoListDataType";
import { ChannelInfoType } from "../Type/ChannelInfoType";
import { ChannelVideoListDataType } from "../Type/ChannelVideoListDataType";


export function useHomeChannel() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // チャンネルID
    const channelId = ChannelIdContext.useCtx();
    // 次データ取得用トークン
    const [nextPageToken, setNextPageToken] = useState(``);
    // チャンネル情報データ
    const [channelVideoListData, setChannelVideoListData] = useState<ChannelVideoListDataType>();
    // チャンネル情報取得エンドポイント
    const [channelInfoEndPoint, setChannelInfoEndPoint] = useState(``);


    // チャンネル動画一覧を取得
    const { isLoading } = useQueryWrapper<ChannelVideoListResponseType>(
        {
            url: channelInfoEndPoint,
            afSuccessFn: (response: ChannelVideoListResponseType) => {

                const responseData: ChannelVideoListDataType = response.data;

                setChannelVideoListData((e) => {

                    // 現在画面表示されている動画リスト
                    const nowVideoItems = e?.items ?? [];
                    // 新たに取得した動画リスト
                    const newVideoItems = responseData.items;
                    // 次に画面に表示する動画リスト
                    const latestVideoItems = [...nowVideoItems, ...newVideoItems];

                    return {
                        ...responseData,
                        items: latestVideoItems
                    }
                });

                setErrMessage(``);
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
                setErrMessage(`動画情報の取得に失敗しました`);
            }
        }
    );

    useEffect(() => {

        if (!channelId) {
            return;
        }

        let channelInfoUrl = `${VIDEO_MNG_PATH}${ENV.CHANNEL_VIDEO_INFO}/${channelId}`;

        if (nextPageToken) {
            channelInfoUrl += `?nextpagetoken=${nextPageToken}`;
        }

        setChannelInfoEndPoint(channelInfoUrl);

    }, [channelId, nextPageToken]);

    return {
        isLoading,
        errMessage,
        setNextPageToken,
        channelVideoListData,
    }
}