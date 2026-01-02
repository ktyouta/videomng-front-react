import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Z_INDEX_PARAM } from "../consts/CommonConst";
import { mediaQuery, useMediaQuery } from "../hooks/useMediaQuery";

//引数の型
type propsType = {
    style?: CSSProperties,
}

function Loading(props: propsType) {

    const override: CSSProperties = {
        borderColor: "#a9a9a9",
        zIndex: Z_INDEX_PARAM.WAITL_OADING,
        ...props.style
    };

    // 画面サイズ判定
    const isPcLess = useMediaQuery(mediaQuery.pcLess);

    return (
        <ClipLoader
            cssOverride={override}
            size={isPcLess ? 45 : 85}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
}

export default Loading;