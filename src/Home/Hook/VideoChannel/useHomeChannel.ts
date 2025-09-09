import { useAtom, useAtomValue } from "jotai";
import useQueryWrapper from "../../../Common/Hook/useQueryWrapper";
import { errResType } from "../../../Common/Hook/useMutationWrapperBase";
import { VIDEO_MNG_PATH } from "../../../Common/Const/CommonConst";
import ENV from "../../../env.json"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ChannelVideoListResponseType } from "../../Type/VideoChannel/ChannelVideoListResponseType";
import { VideoListDataType } from "../../Type/VideoList/VideoListDataType";
import { ChannelInfoType } from "../../Type/VideoChannel/ChannelInfoType";
import { ChannelVideoListDataType } from "../../Type/VideoChannel/ChannelVideoListDataType";
import { ROUTER_PATH } from "../../../Common/Const/RouterPath";
import { useNavigate } from "react-router-dom";
import { useHomeChannelEndpoint } from "./useHomeChannelEndpoint";
import { useCreateHomeVideoListQuery } from "../VideoList/useCreateHomeVideoListQuery";
import { useChannelId } from "./useChannelId";


export function useHomeChannel() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 次データ取得用トークン
    const [nextPageToken, setNextPageToken] = useState(``);
    // チャンネル情報データ
    const [channelVideoListData, setChannelVideoListData] = useState<ChannelVideoListDataType>();
    //ルーティング用
    const navigate = useNavigate();
    // 一覧画面のクエリパラメータ
    const { query } = useCreateHomeVideoListQuery();
    // チャンネルID
    const channelId = useChannelId();


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

        navigate(`${ROUTER_PATH.HOME.ROOT}${query}`);
    }

    return {
        isLoading,
        errMessage,
        setNextPageToken,
        channelVideoListData,
        backHome,
    }
}