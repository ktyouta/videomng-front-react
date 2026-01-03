import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../../../consts/RouterPath";
import { errResType } from "../../../../hooks/useMutationWrapperBase";
import useQueryWrapper from "../../../../hooks/useQueryWrapper";
import { ChannelVideoListDataType } from "../../../../types/channel/ChannelVideoListDataType";
import { ChannelVideoListResponseType } from "../../../../types/channel/ChannelVideoListResponseType";
import { useChannelEndpoint } from "./useChannelEndpoint";
import { useChannelId } from "./useChannelId";


export function useChannel() {

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
            url: useChannelEndpoint({
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
    function back() {

        const prev = queryParam.replace(/^\?previouspath=/, "") || ROUTER_PATH.FAVORITE.ROOT;
        navigate(prev);
    }

    return {
        isLoading,
        errMessage,
        setNextPageToken,
        channelVideoListData,
        back,
    }
}