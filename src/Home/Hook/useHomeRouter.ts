import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useHomeVideoNowSearchConditionValue } from "./useHomeVideoNowSearchConditionValue";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";


export function useHomeRouter() {

    // URL情報
    const location = useLocation();
    // 前回のクエリパラメータを保持用
    const prevSearch = useRef(location.search);
    // 現在の動画検索条件
    const { reset } = useHomeVideoNowSearchConditionValue();


    // クエリパラメータが存在しない場合はホーム画面を初期化する
    useEffect(() => {

        if (location.pathname !== ROUTER_PATH.HOME.ROOT) {
            return;
        }

        if (prevSearch.current && !location.search) {
            reset();
        }

        prevSearch.current = location.search;
    }, [location.search, location.pathname]);

}