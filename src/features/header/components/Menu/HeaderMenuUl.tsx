import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHeaderMenuUl } from "../../hooks/Menu/useHeaderMenuUl";
import { ROUTER_PATH } from "../../../../consts/RouterPath";
import { MEDIA } from "../../../../consts/MediaConst";
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