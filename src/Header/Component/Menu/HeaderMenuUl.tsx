import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHeaderMenuUl } from "../../Hook/Menu/useHeaderMenuUl";
import { ROUTER_PATH } from "../../../Common/Const/RouterPath";
import { MEDIA } from "../../../Common/Const/MediaConst";
import React from "react";
import { HeaderMenuUlPc } from "./HeaderMenuUlPc";
import { HeaderMenuUlMobile } from "./HeaderMenuUlMobile";


export function HeaderMenuUl() {

    console.log(`HeaderMenuUl render`);

    const { isMobile } = useHeaderMenuUl();

    return (
        <React.Fragment>
            {
                isMobile
                    ?
                    // モバイル
                    <HeaderMenuUlMobile />
                    :
                    // PC
                    <HeaderMenuUlPc />
            }
        </React.Fragment>
    );
}