import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useQueryWrapper from "../../../Common/Hook/useQueryWrapper";
import { FavoriteVideoDetailApiUrlModel, } from "../../Model/FavoriteVideoDetailApiUrlModel";
import { useNavigate } from "react-router-dom";
import { errResType } from "../../../Common/Hook/useMutationWrapperBase";
import { FavoriteVideoDetailResponseType } from "../../Type/VideoDetail/FavoriteVideoDetailResponseType";
import { useEffect, useState } from "react";
import { FavoriteVideoIdContext, SetFavoriteVideoIdContext } from "../../Component/Favorite";
import { ROUTER_PATH } from "../../../Common/Const/RouterPath";
import { useFavoriteListApiUrl } from "../VideoList/useFavoriteListApiUrl";
import { FavoriteVideoDetailDataType } from "../../Type/VideoDetail/FavoriteVideoDetailDataType";
import { useFavoriteVideoDetailEndpoint } from "./useFavoriteVideoDetailEndpoint";

export function useFavoriteVideoDetail() {

    // お気に入り動画ID
    const favoriteVideoId = FavoriteVideoIdContext.useCtx();
    // 動画ID
    const setFavoriteVideoId = SetFavoriteVideoIdContext.useCtx();
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // お気に入り動画一覧取得用フック
    const { queryParam } = useFavoriteListApiUrl();
    //ルーティング用
    const navigate = useNavigate();

    // URL直打ち対応
    useEffect(() => {

        const pathArray = window.location.pathname.split("/");

        if (pathArray.length == 4 && `/${pathArray[2]}` === `${ROUTER_PATH.FAVORITE.DETAIL}`) {

            // ID部分を取得
            const videoId = pathArray[3];
            setFavoriteVideoId(videoId);
        }
    }, []);

    // 動画詳細を取得
    const { data: videoDetail, isLoading } = useQueryWrapper<FavoriteVideoDetailResponseType, FavoriteVideoDetailDataType>(
        {
            url: useFavoriteVideoDetailEndpoint(favoriteVideoId),
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

        navigate(`${ROUTER_PATH.FAVORITE.ROOT}${queryParam}`);
    }

    return {
        isLoading,
        videoDetail,
        favoriteVideoId,
        errMessage,
        backPage,
    };
}