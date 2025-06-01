import { useAtom, useAtomValue } from "jotai";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { FavoriteVideoListResponseType } from "../Type/FavoriteVideoListResponseType";
import { favoriteVideoListAtom, selectedFavoriteVideoCategoryAtom, selectedFavoriteVideoTagAtom, selectedFavoriteVideoviewStatusAtom } from "../Atom/FavoriteAtom";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json"
import { useState } from "react";
import { FavoriteVideoListApiUrlModel } from "../Model/FavoriteVideoListApiUrlModel";
import { useFavoriteListApiUrl } from "./useFavoriteListApiUrl";


export function useFavoriteVideoArea() {

    // 動画リスト
    const [videoListItem, setVideoListItemAtom] = useAtom(favoriteVideoListAtom);
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // お気に入り動画リスト取得URL
    const { favoriteVideoUrl } = useFavoriteListApiUrl();
    // 動画一覧API呼び出し済みフラグ
    const [isCalledListApi, setIsCalledListApi] = useState(false);


    // 動画一覧を取得
    const { isLoading, isFetching } = useQueryWrapper<FavoriteVideoListResponseType>(
        {
            url: favoriteVideoUrl,
            afSuccessFn: (response: FavoriteVideoListResponseType) => {
                setIsCalledListApi(true);
                setVideoListItemAtom(response.data);
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
                setIsCalledListApi(true);
                setErrMessage(`動画情報の取得に失敗しました`);
            }
        }
    );

    return {
        videoListItem,
        isLoading,
        errMessage,
        isFetching,
        isCalledListApi,
    }
}