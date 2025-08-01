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
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import { mediaQuery, useMediaQuery } from "../../Common/Hook/useMediaQuery";



export function useHomeVideoDetailInfo() {

    // ルーティング用
    const navigate = useNavigate();
    // ログインフラグ
    const isLogin = IsLoginContext.useCtx();
    // お気に入り動画ID
    const videoId = VideoIdContext.useCtx();
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);


    /**
     * お気に入り登録リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO}`,
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: resType<AddToFavoriteResponseType>) => {

            const message = res.message;
            if (message) {
                toast.success(message);
            }

            navigate(ROUTER_PATH.HOME.ROOT);
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
            const transitionPath = `${ROUTER_PATH.HOME.ROOT}${ROUTER_PATH.HOME.DETAIL}/${videoId}`;
            query = `?backpath=${transitionPath}&nextpath=${transitionPath}`;
        }

        navigate(`${ROUTER_PATH.LOGIN}${query}`);
    }

    return {
        addToFavorite,
        play,
        isLogin,
        moveLogin,
        isMobile,
    }
}