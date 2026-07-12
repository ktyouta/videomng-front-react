import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { CSSProperties } from "styled-components";
import { mediaQuery, useMediaQuery } from "../hooks/useMediaQuery";
import { IconComponent } from "./IconComponent";

// 戻る矢印のサイズ（モバイル/それ以外）
const BACK_ICON_SIZE_MOBILE = "17";
const BACK_ICON_SIZE_DEFAULT = "24";

// 矢印を表示するスクロール位置の閾値
const DISPLAY_SCROLL_THRESHOLD = 200;

type propsType = {
    onClick: () => void,
    style?: CSSProperties,
}

export function BackToListIcon(props: propsType) {

    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);
    // 表示フラグ
    const [isDisplayIcon, setIsDisplayIcon] = useState(true);

    useEffect(() => {

        function toggleDisplay() {

            if (window.scrollY < DISPLAY_SCROLL_THRESHOLD) {
                setIsDisplayIcon(true);
            } else {
                setIsDisplayIcon(false);
            }
        };

        window.addEventListener("scroll", toggleDisplay);

        return () => {
            window.removeEventListener("scroll", toggleDisplay);
        };

    }, []);

    if (!isDisplayIcon) {
        return null;
    }

    return (
        <IconComponent
            icon={FaArrowLeft}
            size={isMobile ? BACK_ICON_SIZE_MOBILE : BACK_ICON_SIZE_DEFAULT}
            style={{
                "color": "white",
                ...props.style,
            }}
            onclick={props.onClick}
        />
    );
}
