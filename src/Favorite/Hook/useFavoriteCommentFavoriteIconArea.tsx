import { useState } from "react";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import useSwitch from "../../Common/Hook/useSwitch";
import { COMMENT_FAVORITE_STATUS } from "../Const/FavoriteConst";
import { AddToFavoriteVideoFavoriteCommentReqestType } from "../Type/AddToFavoriteVideoFavoriteCommentReqestType";
import { FavoriteVideoFavoriteCommentType } from "../Type/FavoriteVideoFavoriteCommentType";
import ENV from "../../env.json";
import { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";


export function useFavoriteCommentFavoriteIconArea() {

    // お気に入りナビゲーション表示フラグ
    const { flag: isOpenFavoriteNav, on: openFavoriteNav, off: closeFavoriteNav } = useSwitch();
    // お気に入り状態
    const [favoriteStatus, setFavoriteStatus] = useState(COMMENT_FAVORITE_STATUS.NONE);


    /**
     * コメントお気に入りリクエスト
     */
    const postFavoriteMutation = useMutationWrapper({
        url: `${ENV.PROTOCOL}${ENV.DOMAIN}${ENV.PORT}${ENV.FAVORITE_COMMENT}`,
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: resType<FavoriteVideoFavoriteCommentType>) => {
            setFavoriteStatus(COMMENT_FAVORITE_STATUS.FAVORITE);
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {
            alert(`お気に入り登録に失敗しました。`);
        },
    });


    /**
     * コメントをお気に入りに登録する
     * @param videoId 
     */
    function favoriteComment(commentId: string) {

        if (!commentId) {
            alert(`お気に入りに登録できませんでした。`);
            return;
        }

        const body: AddToFavoriteVideoFavoriteCommentReqestType = {
            commentId
        }

        // リクエスト送信
        postFavoriteMutation.mutate(body);
    }

    /**
     * コメントお気に入りチェック
     * @returns 
     */
    function isFavorite() {
        return favoriteStatus === COMMENT_FAVORITE_STATUS.FAVORITE;
    }

    return {
        isOpenFavoriteNav,
        openFavoriteNav,
        closeFavoriteNav,
        favoriteComment,
        isFavorite,
    }
}