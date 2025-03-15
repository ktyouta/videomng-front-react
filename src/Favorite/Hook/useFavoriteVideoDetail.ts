import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { favoriteVideoDetailItemAtom, favoriteVideoIdAtom, favoriteVideoMemoListAtom } from "../Atom/FavoriteAtom";
import { FavoriteVideoDetailApiUrlModel, } from "../Model/FavoriteVideoDetailApiUrlModel";
import { useNavigate } from "react-router-dom";
import { FAVORITE_ROOT_PATH } from "../Const/FavoriteConst";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { FavoriteVideoDetailResponseType } from "../Type/FavoriteVideoDetailResponseType";
import { useState } from "react";

export function useFavoriteVideoDetail() {

    // 動画ID
    const videoId = useAtomValue(favoriteVideoIdAtom);
    // 動画詳細
    const [videoDetail, setVideoDetail] = useAtom(favoriteVideoDetailItemAtom);
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // メモ情報
    const setFavoriteVideoMemoList = useSetAtom(favoriteVideoMemoListAtom);

    // 動画詳細を取得
    const { isLoading } = useQueryWrapper<FavoriteVideoDetailResponseType>(
        {
            url: videoId ? `${new FavoriteVideoDetailApiUrlModel(videoId).videoMngApiPath}` : ``,
            afSuccessFn: (response: FavoriteVideoDetailResponseType) => {
                setVideoDetail(response.data);
                setFavoriteVideoMemoList(response.data.memos);
            },
            afErrorFn: (res) => {
                setErrMessage(`動画情報の取得に失敗しました。`);
            }
        }
    );

    return {
        isLoading,
        videoDetail,
        videoId,
        errMessage,
    };
}