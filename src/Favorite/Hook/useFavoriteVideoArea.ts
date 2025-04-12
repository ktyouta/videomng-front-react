import { useAtom, useAtomValue } from "jotai";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { FavoriteVideoListResponseType } from "../Type/FavoriteVideoListResponseType";
import { favoriteVideoListAtom, selectedFavoriteVideoCategoryAtom, selectedFavoriteVideoviewStatusAtom } from "../Atom/FavoriteAtom";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json"
import { useState } from "react";
import { FavoriteVideoListApiUrlModel } from "../Model/FavoriteVideoListApiUrlModel";


export function useFavoriteVideoArea() {

    // 動画リスト
    const [videoListItem, setVideoListItemAtom] = useAtom(favoriteVideoListAtom);
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 動画一覧検索条件選択値(カテゴリ)
    const selectedFavoriteVideoCategory = useAtomValue(selectedFavoriteVideoCategoryAtom);
    // 視聴状況
    const selectedFavoriteVideoviewStatus = useAtomValue(selectedFavoriteVideoviewStatusAtom);


    // 動画一覧を取得
    const { isLoading } = useQueryWrapper<FavoriteVideoListResponseType>(
        {
            url: `${new FavoriteVideoListApiUrlModel({
                videoCategory: selectedFavoriteVideoCategory,
                viewStatus: selectedFavoriteVideoviewStatus,
            }).apiPath}`,
            afSuccessFn: (response: FavoriteVideoListResponseType) => {
                setVideoListItemAtom(response.data);
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
                setErrMessage(`動画情報の取得に失敗しました`);
            }
        }
    );

    return {
        videoListItem,
        isLoading,
        errMessage,
    }
}