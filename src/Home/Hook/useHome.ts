import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { useHomeVideoSearchConditionValue } from "./VideoList/useHomeVideoSearchConditionValue";

export function useHome() {

    // ページ読み込み完了フラグ
    const [isLoadingComp, setIsLoadingComp] = useState(false);

    useEffect(() => {

        setIsLoadingComp(true);
    }, []);

    return {
        isLoadingComp,
    }
}