import { useLocation } from "react-router-dom";
import { useViewStatusList } from "../useViewStatusList";
import { useTagMasterList } from "./useTagMasterList";
import { useFavoriteVideoSearchConditionValue } from "../useFavoriteVideoSearchConditionValue";
import { useEffect, useRef } from "react";
import { ROUTER_PATH } from "../../../../consts/RouterPath";

export function useFavoriteVideoList() {

    // マウント時にタグマスタを取得
    useTagMasterList({
        isGetChache: false
    });

    // マウント時に視聴状況を取得
    useViewStatusList();

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