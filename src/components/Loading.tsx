import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Z_INDEX_PARAM } from "../consts/CommonConst";
import { mediaQuery, useMediaQuery } from "../hooks/useMediaQuery";
import { SPINNER_ANIMATION } from "../consts/SpinnerAnimationConst";
import "../styles/css/SpinnerAnimation.css";

const SPINNER_COLOR = "#1d4ed8";
const SPINNER_BORDER_WIDTH = "4px";
const SPINNER_SIZE_MOBILE = 28;
const SPINNER_SIZE_DEFAULT = 42;

//引数の型
type propsType = {
    style?: CSSProperties,
}

function Loading(props: propsType) {

    const override: CSSProperties = {
        border: `${SPINNER_BORDER_WIDTH} solid`,
        zIndex: Z_INDEX_PARAM.WAITL_OADING,
        animation: SPINNER_ANIMATION,
        ...props.style
    };

    // 画面サイズ判定
    const isPcLess = useMediaQuery(mediaQuery.pcLess);

    return (
        <ClipLoader
            color={SPINNER_COLOR}
            cssOverride={override}
            size={isPcLess ? SPINNER_SIZE_MOBILE : SPINNER_SIZE_DEFAULT}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
}

export default Loading;