import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAtomValue } from "jotai";
import { useGlobalAtomValue } from "../../../../hooks/useGlobalAtom";
import { IsLoginContext } from "../../../../QueryApp";
import { ROUTER_PATH } from "../../../../consts/RouterPath";
import { comboType } from "../../../../components/ComboComponent";
import { useGetNowPath } from "../useGetNowPath";

export function useHeaderMenuUlMobile() {

    // ログインフラグ
    const isLogin = IsLoginContext.useCtx();
    //ルーティング用
    const navigate = useNavigate();
    // 現在のパス
    const { nowPath } = useGetNowPath();


    // メニューリスト
    const menuList = useMemo(() => {

        let list = [{
            label: `ホーム`,
            value: ROUTER_PATH.HOME.ROOT
        }];

        if (isLogin) {
            list.push({
                label: `お気に入り`,
                value: ROUTER_PATH.FAVORITE.ROOT
            });
        }

        return list;
    }, [isLogin]);

    /**
     * メニュー選択
     */
    function selectMenu(value: string) {
        navigate(value);
    }

    return {
        nowPath,
        isLogin,
        menuList,
        selectMenu,
    }
}