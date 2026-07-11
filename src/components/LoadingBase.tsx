import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Z_INDEX_PARAM } from "../consts/CommonConst";
import { SPINNER_ANIMATION } from "../consts/SpinnerAnimationConst";
import "../styles/css/SpinnerAnimation.css";

//引数の型
type propsType = {
    top?: string,
    left?: string,
}

function LoadingBase(props: propsType) {

    const override: CSSProperties = {
        display: "block",
        borderColor: "#a9a9a9",
        position: "fixed",
        top: props.top ?? "50%",
        left: props.left ?? "50%",
        zIndex: Z_INDEX_PARAM.WAITL_OADING,
        animation: SPINNER_ANIMATION,
    };

    return (
        <ClipLoader
            cssOverride={override}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
}

export default LoadingBase;