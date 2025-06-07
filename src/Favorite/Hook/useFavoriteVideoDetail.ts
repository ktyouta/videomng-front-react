import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { favoriteVideoDetailItemAtom, favoriteVideoMemoListAtom } from "../Atom/FavoriteAtom";
import { FavoriteVideoDetailApiUrlModel, } from "../Model/FavoriteVideoDetailApiUrlModel";
import { useNavigate } from "react-router-dom";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { FavoriteVideoDetailResponseType } from "../Type/FavoriteVideoDetailResponseType";
import { useEffect, useState } from "react";
import { FavoriteVideoIdContext, SetFavoriteVideoIdContext } from "../Component/Favorite";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";

export function useFavoriteVideoDetail() {

    // お気に入り動画ID
    const favoriteVideoId = FavoriteVideoIdContext.useCtx();
    // 動画ID
    const setFavoriteVideoId = SetFavoriteVideoIdContext.useCtx();
    // 動画詳細
    const [videoDetail, setVideoDetail] = useAtom(favoriteVideoDetailItemAtom);
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);

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
    const { isLoading } = useQueryWrapper<FavoriteVideoDetailResponseType>(
        {
            url: favoriteVideoId ? `${new FavoriteVideoDetailApiUrlModel(favoriteVideoId).videoMngApiPath}` : ``,
            afSuccessFn: (response: FavoriteVideoDetailResponseType) => {
                setVideoDetail(response.data);
            },
            afErrorFn: (res) => {
                setErrMessage(`動画情報の取得に失敗しました。`);
            }
        }
    );

    return {
        isLoading,
        videoDetail,
        favoriteVideoId,
        errMessage,
    };
}