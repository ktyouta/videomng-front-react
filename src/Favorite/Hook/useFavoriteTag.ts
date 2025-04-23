import { useState } from "react";
import { TAG_EDIT_MODE } from "../Const/FavoriteConst";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";
import { favoriteVideoTagListAtom } from "../Atom/FavoriteAtom";
import { useAtomValue, useSetAtom } from "jotai";
import { FavoriteVideoTagResponseType } from "../Type/FavoriteVideoTagResponseType";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { FavoriteVideoIdContext } from "../Component/Favorite";


export function useFavoriteTag() {

    // 編集フラグ
    const [editMode, setEditMode] = useState(TAG_EDIT_MODE.VIEW);
    // お気に入り動画ID
    const favoriteVideoId = FavoriteVideoIdContext.useCtx();
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // タグリスト
    const setFavoriteVideoTagList = useSetAtom(favoriteVideoTagListAtom);


    // タグリストを取得
    const { isLoading } = useQueryWrapper<FavoriteVideoTagResponseType>(
        {
            url: `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO_TAG}/${favoriteVideoId}`,
            afSuccessFn: (response: FavoriteVideoTagResponseType) => {
                setFavoriteVideoTagList(response.data ?? undefined);
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
                setErrMessage(`タグの取得に失敗しました`);
            }
        }
    );

    /**
     * 編集画面遷移
     */
    function changeEdit() {
        setEditMode(TAG_EDIT_MODE.EDIT);
    }

    /**
     * 閲覧画面遷移
     */
    function changeView() {
        setEditMode(TAG_EDIT_MODE.VIEW);
    }

    return {
        editMode,
        changeEdit,
        changeView,
        errMessage,
        isLoading,
    }

}