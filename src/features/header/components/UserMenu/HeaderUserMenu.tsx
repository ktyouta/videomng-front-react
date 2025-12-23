import React from "react";
import ButtonComponent from "../../../../components/ButtonComponent";
import { useHeaderUserMenu } from "../../hooks/UserMenu/useHeaderUserMenu";
import { HeaderUserMenuList } from "./HeaderUserMenuList";


export function HeaderUserMenu() {

    console.log(`HeaderUserMenu render`);

    const {
        clickLogin,
        isLogin,
        isMobile, } = useHeaderUserMenu();

    return (
        <React.Fragment>
            {
                isLogin
                    ?
                    // ログイン時メニュー
                    <HeaderUserMenuList />
                    :
                    // 未ログイン
                    <ButtonComponent
                        variant="red"
                        onClick={clickLogin}
                        size={isMobile ? "small" : "medium"}
                        style={{
                            boxShadow: "none",
                            ...isMobile ? {
                                padding: "8px 14px",
                                fontSize: "10px",
                            } : {}
                        }}
                    >
                        ログイン
                    </ButtonComponent>
            }
        </React.Fragment>
    );
}