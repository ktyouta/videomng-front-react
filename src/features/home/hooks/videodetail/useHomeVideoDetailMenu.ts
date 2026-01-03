import { useState } from "react";
import { mediaQuery, useMediaQuery } from "../../../../hooks/useMediaQuery";
import { MENU_NO } from "../../const/HomeConst";
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