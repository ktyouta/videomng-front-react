import { useAtom, useAtomValue } from "jotai";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import ENV from '../../env.json';
import { AddToFavoriteRequestType } from "../Type/AddToFavoriteRequestType";
import { AddToFavoriteResponseType } from "../Type/AddToFavoriteResponseType";
import { MENU_NO } from "../Const/HomeConst";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { VideoIdContext } from "../Component/Home";


export function useHomeVideoDetailMenu() {

    // メニュー番号
    const [openMenuNo, setOpenMenuNo] = useState<string>(MENU_NO.INFO);
    // お気に入り動画ID
    const videoId = VideoIdContext.useCtx();

    return {
        openMenuNo,
        setOpenMenuNo,
        videoId,
    }
}