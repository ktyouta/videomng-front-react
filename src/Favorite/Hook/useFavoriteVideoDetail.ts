import { useAtom, useAtomValue } from "jotai";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { videoDetailItemAtom, videoIdAtom } from "../Atom/FavoriteAtom";
import { FavoriteVideoDetailApiUrlModel, } from "../Model/FavoriteVideoDetailApiUrlModel";
import { useNavigate } from "react-router-dom";
import { FAVORITE_ROOT_PATH } from "../Const/FavoriteConst";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { FavoriteVideoDetailResponseType } from "../Type/FavoriteVideoDetailResponseType";
import { useState } from "react";

export function useFavoriteVideoDetail() {

    // 動画ID
    const videoId = useAtomValue(videoIdAtom);
    // 動画詳細
    const [videoDetail, setVideoDetail] = useAtom(videoDetailItemAtom);
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);

    // 動画詳細を取得
    const { isLoading } = useQueryWrapper<FavoriteVideoDetailResponseType>(
        {
            url: videoId ? `${new FavoriteVideoDetailApiUrlModel(videoId).videoMngApiPath}` : ``,
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
        videoId,
        errMessage,
    };
}