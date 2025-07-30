import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAtomValue } from "jotai";
import { useGlobalAtomValue } from "../../Common/Hook/useGlobalAtom";
import { IsLoginContext } from "../../QueryApp";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { comboType } from "../../Common/Component/ComboComponent";

export function useHeaderMenuUlMobile() {

    const location = useLocation();
    // 現在のパス
    const [nowPath, setNowPath] = useState<string>();
    // ログインフラグ
    const isLogin = IsLoginContext.useCtx();
    // メニューリスト
    const [menuList, setMenuList] = useState<comboType[]>([]);
    //ルーティング用
    const navigate = useNavigate();

    /**
     * URL切り替え時のイベント
     */
    useEffect(() => {

        const pathArray = window.location.pathname.split("/");

        if (pathArray.length < 2) {
            return;
        }

        setNowPath(`/${pathArray[1]}`);
    }, [location]);

    useEffect(() => {

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

        setMenuList(list);
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