import { useAtom, useAtomValue } from "jotai";
import useMutationWrapper from "../../../Common/Hook/useMutationWrapper";
import { errResType, resType } from "../../../Common/Hook/useMutationWrapperBase";
import ENV from '../../../env.json';
import { AddToFavoriteRequestType } from "../../Type/VideoDetail/AddToFavoriteRequestType";
import { AddToFavoriteResponseType } from "../../Type/VideoDetail/AddToFavoriteResponseType";
import { MENU_NO } from "../../Const/HomeConst";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { mediaQuery, useMediaQuery } from "../../../Common/Hook/useMediaQuery";
import { useVideoId } from "./useVideoId";


export function useHomeVideoDetailMenu() {

    // メニュー番号
    const [openMenuNo, setOpenMenuNo] = useState<string>(MENU_NO.INFO);
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);
    // 動画ID
    const videoId = useVideoId();

    return {
        openMenuNo,
        setOpenMenuNo,
        videoId,
        isMobile,
    }
}