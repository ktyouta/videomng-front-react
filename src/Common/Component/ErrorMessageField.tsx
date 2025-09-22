import React, { CSSProperties } from "react";
import { ErrMessagePropsType, ErrorMessage } from "./ErrorMessage";

type propsType = Partial<ErrMessagePropsType>;


export function ErrorMessageField(props: propsType) {

    return (
        <React.Fragment>
            {
                props.message &&
                <ErrorMessage
                    message={props.message}
                    style={props.style}
                />
            }
        </React.Fragment>
    );
}