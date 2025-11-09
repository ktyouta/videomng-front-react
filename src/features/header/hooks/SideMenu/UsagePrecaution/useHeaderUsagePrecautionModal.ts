import { useState } from "react";
import { mediaQuery, useMediaQuery } from "../../../../../hooks/useMediaQuery";


export function useHeaderUsagePrecautionModal() {

    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);

    return {
        isMobile,
    }
}