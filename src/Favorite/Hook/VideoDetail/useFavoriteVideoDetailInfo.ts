import useMutationWrapper from "../../../Common/Hook/useMutationWrapper";
import { errResType, resSchema, resType } from "../../../Common/Hook/useMutationWrapperBase";
import ENV from '../../../env.json';
import { useLocation, useNavigate } from "react-router-dom";
import useSwitch from "../../../Common/Hook/useSwitch";
import { useState } from "react";
import { ROUTER_PATH } from "../../../Common/Const/RouterPath";
import { toast } from "react-toastify";
import { VIDEO_MNG_PATH } from "../../../Common/Const/CommonConst";
import { mediaQuery, useMediaQuery } from "../../../Common/Hook/useMediaQuery";
import { useVideoId } from "./useVideoId";
import { useVideoPlayUrl } from "../../../Common/Hook/useVideoPlayUrl";
import { useCreateFavoriteVideoListQuery } from "../useCreateFavoriteVideoListQuery";
import { getPrevPath } from "../../../Common/Function/CommonFunction";
import { FAVORITE_PREV_PATH_KEY } from "../../Const/FavoriteConst";



export function useFavoriteVideoDetailInfo() {

    // ルーティング用
    const navigate = useNavigate();
    // 確認モーダルの表示フラグ
    const { flag: isOpenModal, on: openModal, off: closeModal } = useSwitch();
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);
    // 動画ID
    const videoId = useVideoId();

    /**
     * お気に入り動画削除リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO}/${videoId}`,
        method: "DELETE",
        // 正常終了後の処理
        afSuccessFn: (res: unknown) => {

            // レスポンスの型チェック
            const resParsed = resSchema().safeParse(res);

            if (!resParsed.success) {
                toast.error(`動画の削除に失敗しました。時間をおいて再度お試しください。`);
                closeModal();
                return;
            }

            const message = resParsed.data.message;

            if (message) {
                toast.success(message);
            }

            // 前画面のパスを取得
            const prev = getPrevPath(FAVORITE_PREV_PATH_KEY, ROUTER_PATH.FAVORITE.ROOT);
            navigate(prev);
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {
            closeModal();
            toast.error(`動画の削除に失敗しました。`);
        },
    });

    /**
     * お気に入り動画削除ボタン押下
     */
    function clickDeleteFavoriteVide() {

        // 削除確認用モーダルを展開
        openModal();
    }


    /**
     * 動画を再生
     */
    function play() {

        if (!videoId) {
            toast.error(`動画を再生できません。`);
            return;
        }

        window.open(useVideoPlayUrl(videoId), `_blank`);
    }

    /**
     * お気に入り動画削除実行
     */
    function executeDelete() {

        // リクエスト送信
        postMutation.mutate();
    }

    return {
        clickDeleteFavoriteVide,
        play,
        isOpenModal,
        closeModal,
        executeDelete,
        isMobile,
    }
}