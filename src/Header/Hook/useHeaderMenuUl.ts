import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAtomValue } from "jotai";
import { useGlobalAtomValue } from "../../Common/Hook/useGlobalAtom";
import { IsLoginContext } from "../../QueryApp";
import { useGetNowPath } from "./useGetNowPath";

export function useHeaderMenuUl() {

    // ログインフラグ
    const isLogin = IsLoginContext.useCtx();
    // 現在のパス
    const { nowPath } = useGetNowPath();

    return {
        nowPath,
        isLogin
    }
}