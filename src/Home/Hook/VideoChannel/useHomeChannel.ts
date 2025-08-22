import { useAtom, useAtomValue } from "jotai";
import useQueryWrapper from "../../../Common/Hook/useQueryWrapper";
import { errResType } from "../../../Common/Hook/useMutationWrapperBase";
import { VIDEO_MNG_PATH } from "../../../Common/Const/CommonConst";
import ENV from "../../../env.json"
import { useEffect, useState } from "react";
import { ChannelIdContext } from "../../Component/Home";
import { toast } from "react-toastify";
import { ChannelVideoListResponseType } from "../../Type/VideoChannel/ChannelVideoListResponseType";
import { VideoListDataType } from "../../Type/VideoList/VideoListDataType";
import { ChannelInfoType } from "../../Type/VideoChannel/ChannelInfoType";
import { ChannelVideoListDataType } from "../../Type/VideoChannel/ChannelVideoListDataType";
import { showMoreDataAtom } from "../../Atom/HomeAtom";
import { VideoListApiUrlModel } from "../../Model/VideoListApiUrlModel";
import { ROUTER_PATH } from "../../../Common/Const/RouterPath";
import { useNavigate } from "react-router-dom";


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
    // 動画リスト追加読み込み用
    const showMoreData = useAtomValue(showMoreDataAtom);
    //ルーティング用
    const navigate = useNavigate();


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

    /**
     * チャンネル情報取得用エンドポイント作成
     */
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

    /**
         * ホーム画面に戻る
         */
    function backHome() {

        const keyword = showMoreData?.keyword ?? ``;
        const videoType = showMoreData?.videoType ?? ``;
        const videoCategory = showMoreData?.videoCategory ?? ``;

        const videoListApiUrlModel = VideoListApiUrlModel.create({
            keyword,
            videoType,
            videoCategory,
        });

        navigate(`${ROUTER_PATH.HOME.ROOT}${videoListApiUrlModel.query}`);
    }

    return {
        isLoading,
        errMessage,
        setNextPageToken,
        channelVideoListData,
        backHome,
    }
}