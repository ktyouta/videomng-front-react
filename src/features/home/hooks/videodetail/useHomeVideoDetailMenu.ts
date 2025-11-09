import { useAtom, useAtomValue } from "jotai";
import { errResType, resType } from "../../../../hooks/useMutationWrapperBase";
import ENV from '../../../../env.json';
import { AddToFavoriteRequestType } from "../../types/videodetail/AddToFavoriteRequestType";
import { AddToFavoriteResponseType } from "../../types/videodetail/AddToFavoriteResponseType";
import { MENU_NO } from "../../const/HomeConst";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { mediaQuery, useMediaQuery } from "../../../../hooks/useMediaQuery";
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