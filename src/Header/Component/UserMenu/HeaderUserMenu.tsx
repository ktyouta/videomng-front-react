import React from "react";
import ButtonComponent from "../../../Common/Component/ButtonComponent";
import { useHeaderUserMenu } from "../../Hook/UserMenu/useHeaderUserMenu";
import { IconComponent } from "../../../Common/Component/IconComponent";
import { IoPersonCircleOutline } from "react-icons/io5";
import styled from "styled-components";
import { Z_INDEX_PARAM } from "../../../Common/Const/CommonConst";
import { MEDIA } from "../../../Common/Const/MediaConst";
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
                isLogin ?
                    // ログイン時メニュー
                    <HeaderUserMenuList />
                    :
                    // 未ログイン
                    <ButtonComponent
                        styleTypeNumber="GRAD_RED"
                        title={"ログイン"}
                        onclick={clickLogin}
                        style={{
                            fontSize: isMobile ? "12px" : "14px",
                            width: isMobile ? "82px" : "100px",
                            minWidth: "82px",
                            height: isMobile ? "38%" : "35%",
                            background: "#eb3941",
                            boxShadow: "none",
                        }}
                    />
            }
        </React.Fragment>
    );
}