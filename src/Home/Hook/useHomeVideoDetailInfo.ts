import { useAtom, useAtomValue } from "jotai";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import ENV from '../../env.json';
import { useNavigate } from "react-router-dom";
import useSwitch from "../../Common/Hook/useSwitch";
import { useState } from "react";
import { VideoUrlModel } from "../../Common/Model/VideoUrlModel";
import { AddToFavoriteRequestType } from "../Type/AddToFavoriteRequestType";
import { AddToFavoriteResponseType } from "../Type/AddToFavoriteResponseType";
import { useGlobalAtomValue } from "../../Common/Hook/useGlobalAtom";
import { IsLoginContext } from "../../QueryApp";
import { VideoIdContext } from "../Component/Home";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { toast } from "react-toastify";



export function useHomeVideoDetailInfo() {

    // ルーティング用
    const navigate = useNavigate();
    // ログインフラグ
    const isLogin = IsLoginContext.useCtx();
    // お気に入り動画ID
    const videoId = VideoIdContext.useCtx();


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
                toast.success(message);
            }

            navigate(ROUTER_PATH.HOME);
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {

            const message = res.response.data.message;
            if (message) {
                toast.error(message);
            }
        },
    });

    /**
     * 動画をお気に入りに登録する
     * @param videoId 
     * @returns 
     */
    function addToFavorite() {

        if (!videoId) {
            toast.error(`お気に入りに登録できません。`);
            return;
        }

        const body: AddToFavoriteRequestType = {
            videoId
        }

        // リクエスト送信
        postMutation.mutate(body);
    }

    /**
     * 動画を再生
     */
    function play() {

        // 動画URL
        const videoUrlModel = new VideoUrlModel(videoId);
        window.open(`${videoUrlModel.videoUrl}`, `_blank`);
    }


    /**
     * ログイン画面に遷移
     */
    function moveLogin() {

        let query = ``;

        if (videoId) {
            query = `?backpath=${ROUTER_PATH.HOME}/${videoId}&nextpath=${ROUTER_PATH.HOME}/${videoId}`;
        }

        navigate(`${ROUTER_PATH.LOGIN}${query}`);
    }

    return {
        addToFavorite,
        play,
        isLogin,
        moveLogin,
    }
}