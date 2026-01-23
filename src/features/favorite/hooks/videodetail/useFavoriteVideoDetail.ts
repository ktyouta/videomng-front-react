import { useState } from "react";
import { ROUTER_PATH } from "../../../../consts/RouterPath";
import { useAppNavigation } from "../../../../hooks/useAppNavigation";
import useQueryWrapper from "../../../../hooks/useQueryWrapper";
import { FavoriteVideoDetailDataType } from "../../types/videodetail/FavoriteVideoDetailDataType";
import { FavoriteVideoDetailResponseType } from "../../types/videodetail/FavoriteVideoDetailResponseType";
import { useFavoriteVideoDetailEndpoint } from "./useFavoriteVideoDetailEndpoint";
import { useVideoId } from "./useVideoId";

export function useFavoriteVideoDetail() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // ルーティング用
    const { appGoBack } = useAppNavigation();
    // 動画ID
    const videoId = useVideoId();


    // 動画詳細を取得
    const { data: videoDetail, isLoading } = useQueryWrapper<FavoriteVideoDetailResponseType, FavoriteVideoDetailDataType>(
        {
            url: useFavoriteVideoDetailEndpoint(videoId),
            select: (res: FavoriteVideoDetailResponseType) => {
                return res.data
            },
            afErrorFn: (res) => {
                setErrMessage(`動画情報の取得に失敗しました。`);
            }
        }
    );

    /**
     * 前画面に戻る
     */
    function backPage() {
        appGoBack(ROUTER_PATH.FAVORITE.ROOT);
    }

    return {
        isLoading,
        videoDetail,
        errMessage,
        backPage,
    };
}