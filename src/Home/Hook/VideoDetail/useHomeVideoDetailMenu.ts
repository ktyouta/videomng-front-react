import { useAtom, useAtomValue } from "jotai";
import useMutationWrapper from "../../../Common/Hook/useMutationWrapper";
import { errResType, resType } from "../../../Common/Hook/useMutationWrapperBase";
import ENV from '../../../env.json';
import { AddToFavoriteRequestType } from "../../Type/VideoDetail/AddToFavoriteRequestType";
import { AddToFavoriteResponseType } from "../../Type/VideoDetail/AddToFavoriteResponseType";
import { MENU_NO } from "../../Const/HomeConst";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { VideoIdContext } from "../../Component/Home";
import { mediaQuery, useMediaQuery } from "../../../Common/Hook/useMediaQuery";


export function useHomeVideoDetailMenu() {

    // メニュー番号
    const [openMenuNo, setOpenMenuNo] = useState<string>(MENU_NO.INFO);
    // お気に入り動画ID
    const videoId = VideoIdContext.useCtx();
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);

    return {
        openMenuNo,
        setOpenMenuNo,
        videoId,
        isMobile,
    }
}