import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useQueryWrapper from "../../../../hooks/useQueryWrapper";
import { useLocation, useNavigate } from "react-router-dom";
import { errResType } from "../../../../hooks/useMutationWrapperBase";
import { FavoriteVideoDetailResponseType } from "../../types/videodetail/FavoriteVideoDetailResponseType";
import { useEffect, useState } from "react";
import { ROUTER_PATH } from "../../../../consts/RouterPath";
import { FavoriteVideoDetailDataType } from "../../types/videodetail/FavoriteVideoDetailDataType";
import { useFavoriteVideoDetailEndpoint } from "./useFavoriteVideoDetailEndpoint";
import { useCreateFavoriteVideoListQuery } from "../useCreateFavoriteVideoListQuery";
import { useVideoId } from "./useVideoId";
import { getPrevPath } from "../../../../utils/CommonFunction";
import { PREV_PATH_KEY } from "../../../../consts/CommonConst";

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