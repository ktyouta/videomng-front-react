import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ROUTER_PATH } from "../../../../../consts/RouterPath";
import { useHomeVideoNowSearchConditionValue } from "../../useHomeVideoNowSearchConditionValue";
import { useHomeVideoSearchConditionValue } from "../useHomeVideoSearchConditionValue";


export function useHomeSearchArea() {

    // URL情報
    const location = useLocation();
    // 前回のクエリパラメータを保持用
    const prevSearch = useRef(location.search);
    // 現在の動画検索条件
    const { reset } = useHomeVideoNowSearchConditionValue();
    // 動画検索条件
    const { resetInput } = useHomeVideoSearchConditionValue();

    // クエリパラメータが存在しない場合はホーム画面を初期化する
    useEffect(() => {

        if (location.pathname !== ROUTER_PATH.HOME.ROOT) {
            return;
        }

        if (prevSearch.current && !location.search) {
            reset();
            resetInput();
        }

        prevSearch.current = location.search;
    }, [location.search, location.pathname]);

}