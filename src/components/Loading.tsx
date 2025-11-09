import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";
import { Z_INDEX_PARAM } from "../consts/CommonConst";

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

    return (
        <ClipLoader
            cssOverride={override}
            size={85}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
}

export default Loading;