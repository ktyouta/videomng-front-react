import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import ENV from '../../env.json';
import { FAVORITE_ROOT_PATH, MENU_NO } from "../Const/FavoriteConst";
import { useNavigate } from "react-router-dom";
import useSwitch from "../../Common/Hook/useSwitch";
import { useState } from "react";
import { VideoUrlModel } from "../../Common/Model/VideoUrlModel";


type propsType = {
    videoId: string
}


export function useFavoriteVideoDetailInfo(props: propsType) {

    // ルーティング用
    const navigate = useNavigate();

    /**
     * お気に入り動画削除リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${ENV.PROTOCOL}${ENV.DOMAIN}${ENV.PORT}${ENV.FAVORITE_VIDEO}/${props.videoId}`,
        method: "DELETE",
        // 正常終了後の処理
        afSuccessFn: (res: resType<unknown>) => {

            const message = res.message;
            if (message) {
                alert(message);
            }
            navigate(FAVORITE_ROOT_PATH);
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {
            alert(`動画の削除に失敗しました。`);
        },
    });

    /**
     * お気に入り動画削除
     */
    function deleteFavoriteVide() {

        if (!window.confirm(`この動画をお気に入りから外しもよろしいですか？`)) {
            return;
        }

        // リクエスト送信
        postMutation.mutate();
    }


    /**
     * 動画を再生
     */
    function play() {

        // 動画URL
        const videoUrlModel = new VideoUrlModel(props.videoId);
        window.open(`${videoUrlModel.videoUrl}`, `_blank`);
    }

    return {
        deleteFavoriteVide,
        play,
    }
}