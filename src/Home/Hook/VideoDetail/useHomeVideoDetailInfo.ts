import { useAtom, useAtomValue } from "jotai";
import useMutationWrapper from "../../../Common/Hook/useMutationWrapper";
import { errResType, resSchema, resType } from "../../../Common/Hook/useMutationWrapperBase";
import ENV from '../../../env.json';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useSwitch from "../../../Common/Hook/useSwitch";
import { useRef, useState } from "react";
import { AddToFavoriteRequestType } from "../../Type/VideoDetail/AddToFavoriteRequestType";
import { AddToFavoriteResponseType } from "../../Type/VideoDetail/AddToFavoriteResponseType";
import { useGlobalAtomValue } from "../../../Common/Hook/useGlobalAtom";
import { IsLoginContext } from "../../../QueryApp";
import { ROUTER_PATH } from "../../../Common/Const/RouterPath";
import { toast } from "react-toastify";
import { VIDEO_MNG_PATH } from "../../../Common/Const/CommonConst";
import { mediaQuery, useMediaQuery } from "../../../Common/Hook/useMediaQuery";
import { useVideoId } from "./useVideoId";
import { useVideoPlayUrl } from "../../../Common/Hook/useVideoPlayUrl";
import { useCreateHomeVideoListQuery } from "../VideoList/useCreateHomeVideoListQuery";
import { useQueryParams } from "../../../Common/Hook/useQueryParams";
import { HOME_PREV_PATH_KEY, LIST_SEARCH_CONDITION_KEY } from "../../Const/HomeConst";
import { LOGIN_PREV_PATH_KEY } from "../../../Login/Const/LoginConst";
import { getPrevPath } from "../../../Common/Function/CommonFunction";


export function useHomeVideoDetailInfo() {

    // ルーティング用
    const navigate = useNavigate();
    // ログインフラグ
    const isLogin = IsLoginContext.useCtx();
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);
    // 動画ID
    const videoId = useVideoId();
    // URL情報
    const location = useLocation();
    // クエリパラメータ(遷移元情報)
    const queryParam = location.search;
    // パス
    const pathName = location.pathname;

    /**
     * お気に入り登録リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO}`,
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: unknown) => {

            // レスポンスの型チェック
            const resParsed = resSchema().safeParse(res);

            if (!resParsed.success) {
                toast.error(`お気に入り登録に失敗しました。時間をおいて再度お試しください。`);
                return;
            }

            const message = resParsed.data.message;
            if (message) {
                toast.success(message);
            }

            // 前画面のパスを取得
            const prev = getPrevPath(HOME_PREV_PATH_KEY, ROUTER_PATH.HOME.ROOT);
            navigate(prev);
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

        if (!videoId) {
            toast.error(`動画を再生できません。`);
            return;
        }

        window.open(useVideoPlayUrl(videoId), `_blank`);
    }

    /**
     * ログイン画面に遷移
     */
    function moveLogin() {

        let path = ``;

        if (videoId) {
            path = `?${LOGIN_PREV_PATH_KEY}=${pathName}${queryParam}`;
        }

        navigate(`${ROUTER_PATH.LOGIN}${path}`);
    }

    return {
        addToFavorite,
        play,
        isLogin,
        moveLogin,
        isMobile,
    }
}