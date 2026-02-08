import { useState } from "react";
import { ROUTER_PATH } from "../../../../consts/RouterPath";
import { useAppNavigation } from "../../../../hooks/useAppNavigation";
import { ChannelVideoListDataType } from "../../../../types/channel/ChannelVideoListDataType";
import { ChannelVideoListResponseType } from "../../../../types/channel/ChannelVideoListResponseType";
import { getChannelVideo } from "../../api/getChannelVideo";
import { useChannelId } from "./useChannelId";


export function useHomeChannel() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 次データ取得用トークン
    const [nextPageToken, setNextPageToken] = useState(``);
    // チャンネル情報データ
    const [channelVideoListData, setChannelVideoListData] = useState<ChannelVideoListDataType>();
    // チャンネルID
    const channelId = useChannelId();
    // ルーティング用
    const { appGoBack } = useAppNavigation();

    // チャンネル動画一覧を取得
    const { isLoading } = getChannelVideo({
        channelId,
        nextPageToken,
        onSuccess: (response: ChannelVideoListResponseType) => {
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
        onError: (res) => {
            setErrMessage(`動画情報の取得に失敗しました`);
        }
    });

    /**
     * ホーム画面に戻る
     */
    function backHome() {
        appGoBack(ROUTER_PATH.HOME.ROOT);
    }

    return {
        isLoading,
        errMessage,
        setNextPageToken,
        channelVideoListData,
        backHome,
    }
}