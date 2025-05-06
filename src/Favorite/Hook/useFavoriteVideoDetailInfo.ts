import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import ENV from '../../env.json';
import { useNavigate } from "react-router-dom";
import useSwitch from "../../Common/Hook/useSwitch";
import { useState } from "react";
import { VideoUrlModel } from "../../Common/Model/VideoUrlModel";
import { FavoriteVideoIdContext } from "../Component/Favorite";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { toast } from "react-toastify";



export function useFavoriteVideoDetailInfo() {

    // ルーティング用
    const navigate = useNavigate();
    // お気に入り動画ID
    const favoriteVideoId = FavoriteVideoIdContext.useCtx();
    // 確認モーダルの表示フラグ
    const { flag: isOpenModal, on: openModal, off: closeModal } = useSwitch();


    /**
     * お気に入り動画削除リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${ENV.PROTOCOL}${ENV.DOMAIN}${ENV.PORT}${ENV.FAVORITE_VIDEO}/${favoriteVideoId}`,
        method: "DELETE",
        // 正常終了後の処理
        afSuccessFn: (res: resType<unknown>) => {

            const message = res.message;
            if (message) {
                toast.success(message);
            }
            navigate(ROUTER_PATH.FAVORITE);
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

        // 動画URL
        const videoUrlModel = new VideoUrlModel(favoriteVideoId);
        window.open(`${videoUrlModel.videoUrl}`, `_blank`);
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
    }
}