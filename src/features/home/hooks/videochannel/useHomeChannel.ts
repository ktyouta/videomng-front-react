import { useAtom, useAtomValue } from "jotai";
import useQueryWrapper from "../../../../hooks/useQueryWrapper";
import { errResType } from "../../../../hooks/useMutationWrapperBase";
import { VIDEO_MNG_PATH } from "../../../../consts/CommonConst";
import ENV from "../../../../env.json"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ChannelVideoListResponseType } from "../../types/videochannel/ChannelVideoListResponseType";
import { VideoListDataType } from "../../types/videolist/VideoListDataType";
import { ChannelInfoType } from "../../types/videochannel/ChannelInfoType";
import { ChannelVideoListDataType } from "../../types/videochannel/ChannelVideoListDataType";
import { ROUTER_PATH } from "../../../../consts/RouterPath";
import { useNavigate } from "react-router-dom";
import { useHomeChannelEndpoint } from "./useHomeChannelEndpoint";
import { useCreateHomeVideoListQuery } from "../videolist/useCreateHomeVideoListQuery";
import { useChannelId } from "./useChannelId";
import { useQueryParams } from "../../../../hooks/useQueryParams";


export function useHomeChannel() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 次データ取得用トークン
    const [nextPageToken, setNextPageToken] = useState(``);
    // チャンネル情報データ
    const [channelVideoListData, setChannelVideoListData] = useState<ChannelVideoListDataType>();
    //ルーティング用
    const navigate = useNavigate();
    // チャンネルID
    const channelId = useChannelId();
    // クエリパラメータ(遷移元情報)
    const queryParam = location.search;


    // チャンネル動画一覧を取得
    const { isLoading } = useQueryWrapper<ChannelVideoListResponseType>(
        {
            url: useHomeChannelEndpoint({
                channelId,
                nextPageToken
            }),
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
     * ホーム画面に戻る
     */
    function backHome() {

        const prev = queryParam.replace(/^\?previouspath=/, "") || ROUTER_PATH.HOME.ROOT;
        navigate(prev);
    }

    return {
        isLoading,
        errMessage,
        setNextPageToken,
        channelVideoListData,
        backHome,
    }
}