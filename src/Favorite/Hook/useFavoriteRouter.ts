import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { useFavoriteVideoSearchConditionValue } from "./useFavoriteVideoSearchConditionValue";


export function useFavoriteRouter() {

    // URL情報
    const location = useLocation();
    // 前回のクエリパラメータを保持用
    const prevSearch = useRef(location.search);
    // 現在の動画検索条件
    const { reset } = useFavoriteVideoSearchConditionValue();


    // クエリパラメータが存在しない場合はお気に入り画面を初期化する
    useEffect(() => {

        if (location.pathname !== ROUTER_PATH.FAVORITE.ROOT) {
            return;
        }

        if (prevSearch.current && !location.search) {
            reset();
        }

        prevSearch.current = location.search;
    }, [location.search, location.pathname]);

}