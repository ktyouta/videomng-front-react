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
import { showMoreDataAtom } from "../../Atom/HomeAtom";
import { VideoListApiUrlModel } from "../../Model/VideoListApiUrlModel";
import { ROUTER_PATH } from "../../../Common/Const/RouterPath";
import { useNavigate } from "react-router-dom";
import { useHomeChannelEndpoint } from "./useHomeChannelEndpoint";


export function useHomeChannel() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // チャンネルID
    const [channelId, setChannelId] = useState(``);
    // 次データ取得用トークン
    const [nextPageToken, setNextPageToken] = useState(``);
    // チャンネル情報データ
    const [channelVideoListData, setChannelVideoListData] = useState<ChannelVideoListDataType>();
    // 動画リスト追加読み込み用
    const showMoreData = useAtomValue(showMoreDataAtom);
    //ルーティング用
    const navigate = useNavigate();


    // URL直打ち対応
    useEffect(() => {

        const pathArray = window.location.pathname.split("/");

        if (pathArray.length !== 4) {
            throw Error(`チャンネルIDが存在しません。`);
        }

        // ID部分を取得
        const channelId = pathArray[3];

        if (!channelId) {
            throw Error(`チャンネルIDが存在しません。`);
        }

        setChannelId(channelId);
    }, []);

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