import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useQueryWrapper from "../../../Common/Hook/useQueryWrapper";
import { useNavigate } from "react-router-dom";
import { errResType } from "../../../Common/Hook/useMutationWrapperBase";
import { FavoriteVideoDetailResponseType } from "../../Type/VideoDetail/FavoriteVideoDetailResponseType";
import { useEffect, useState } from "react";
import { ROUTER_PATH } from "../../../Common/Const/RouterPath";
import { FavoriteVideoDetailDataType } from "../../Type/VideoDetail/FavoriteVideoDetailDataType";
import { useFavoriteVideoDetailEndpoint } from "./useFavoriteVideoDetailEndpoint";
import { useCreateFavoriteVideoListQuery } from "../VideoList/useCreateFavoriteVideoListQuery";

export function useFavoriteVideoDetail() {

    // お気に入り動画ID
    const [favoriteVideoId, setFavoriteVideoId] = useState(``);
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 動画一覧画面のクエリパラメータ
    const { query } = useCreateFavoriteVideoListQuery();
    //ルーティング用
    const navigate = useNavigate();

    // URL直打ち対応
    useEffect(() => {

        const pathArray = window.location.pathname.split("/");

        if (pathArray.length !== 4) {
            throw Error(`動画IDが存在しません。`);
        }

        // ID部分を取得
        const videoId = pathArray[3];

        if (!videoId) {
            throw Error(`動画IDが存在しません。`);
        }

        setFavoriteVideoId(videoId);
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

        navigate(`${ROUTER_PATH.FAVORITE.ROOT}${query}`);
    }

    return {
        isLoading,
        videoDetail,
        errMessage,
        backPage,
        favoriteVideoId,
        setFavoriteVideoId,
    };
}