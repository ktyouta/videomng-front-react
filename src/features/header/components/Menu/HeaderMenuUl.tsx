import React from "react";
import { useHeaderMenuUl } from "../../hooks/Menu/useHeaderMenuUl";
import { HeaderMenuUlPc } from "./HeaderMenuUlPc";


export function HeaderMenuUl() {

    console.log(`HeaderMenuUl render`);

    const { isMobile } = useHeaderMenuUl();

    return (
        <React.Fragment>
            {
                isMobile
                    ?
                    // モバイル
                    null
                    :
                    // PC
                    <HeaderMenuUlPc />
            }
        </React.Fragment>
    );
}