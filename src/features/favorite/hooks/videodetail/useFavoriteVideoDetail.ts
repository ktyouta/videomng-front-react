import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PREV_PATH_KEY } from "../../../../consts/CommonConst";
import { ROUTER_PATH } from "../../../../consts/RouterPath";
import useQueryWrapper from "../../../../hooks/useQueryWrapper";
import { getPrevPath } from "../../../../utils/CommonFunction";
import { FavoriteVideoDetailDataType } from "../../types/videodetail/FavoriteVideoDetailDataType";
import { FavoriteVideoDetailResponseType } from "../../types/videodetail/FavoriteVideoDetailResponseType";
import { useFavoriteVideoDetailEndpoint } from "./useFavoriteVideoDetailEndpoint";
import { useVideoId } from "./useVideoId";

export function useFavoriteVideoDetail() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    //ルーティング用
    const navigate = useNavigate();
    // 動画ID
    const videoId = useVideoId();
    // 前画面のパスを取得
    const prev = getPrevPath(PREV_PATH_KEY, ROUTER_PATH.FAVORITE.ROOT);


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
     * お気に入り動画一覧画面に戻る
     */
    function backPage() {
        navigate(prev);
    }

    return {
        isLoading,
        videoDetail,
        errMessage,
        backPage,
    };
}