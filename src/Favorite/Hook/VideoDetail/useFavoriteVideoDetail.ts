import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useQueryWrapper from "../../../Common/Hook/useQueryWrapper";
import { useLocation, useNavigate } from "react-router-dom";
import { errResType } from "../../../Common/Hook/useMutationWrapperBase";
import { FavoriteVideoDetailResponseType } from "../../Type/VideoDetail/FavoriteVideoDetailResponseType";
import { useEffect, useState } from "react";
import { ROUTER_PATH } from "../../../Common/Const/RouterPath";
import { FavoriteVideoDetailDataType } from "../../Type/VideoDetail/FavoriteVideoDetailDataType";
import { useFavoriteVideoDetailEndpoint } from "./useFavoriteVideoDetailEndpoint";
import { useCreateFavoriteVideoListQuery } from "../useCreateFavoriteVideoListQuery";
import { useVideoId } from "./useVideoId";
import { FAVORITE_PREV_PATH_KEY } from "../../Const/FavoriteConst";
import { getPrevPath } from "../../../Common/Function/CommonFunction";

export function useFavoriteVideoDetail() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    //ルーティング用
    const navigate = useNavigate();
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
     * お気に入り動画一覧画面に戻る
     */
    function backPage() {

        // 前画面のパスを取得
        const prev = getPrevPath(FAVORITE_PREV_PATH_KEY, ROUTER_PATH.FAVORITE.ROOT);
        navigate(prev);
    }

    return {
        isLoading,
        videoDetail,
        errMessage,
        backPage,
    };
}