import { useAtom, useAtomValue } from "jotai";
import { isLoginAtom } from "../../Common/Atom/CommonAtom";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import ENV from '../../env.json';
import { AddToFavoriteRequestType } from "../Type/AddToFavoriteRequestType";
import { AddToFavoriteResponseType } from "../Type/AddToFavoriteResponseType";
import { HOME_ROOT_PATH } from "../Const/HomeConst";
import { useNavigate } from "react-router-dom";


export function useHomeVideoDetailMenu() {

    // ログインフラグ
    const isLogin = useAtomValue(isLoginAtom);
    // ルーティング用
    const navigate = useNavigate();


    /**
     * お気に入り登録リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${ENV.PROTOCOL}${ENV.DOMAIN}${ENV.PORT}${ENV.FAVORITE_VIDEO}`,
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: resType<AddToFavoriteResponseType>) => {

            const message = res.message;
            if (message) {
                alert(message);
            }

            navigate(HOME_ROOT_PATH);
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {

            const message = res.response.data.message;
            if (message) {
                alert(message);
            }
        },
    });

    /**
     * 動画をお気に入りに登録する
     * @param videoId 
     */
    function addToFavorite(videoId: string) {

        if (!window.confirm(`動画をお気に入りに登録しますか？`)) {
            return;
        }

        if (!videoId) {
            alert(`お気に入りに登録できませんでした。`);
            return;
        }

        const body: AddToFavoriteRequestType = {
            videoId
        }

        // リクエスト送信
        postMutation.mutate(body);
    }

    return {
        isLogin,
        addToFavorite
    }
}