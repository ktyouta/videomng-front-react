import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";

const Parent = styled.div`
  color:white;
`;


type propsType = {
    closeModal: () => void
}

export function FavoriteMemo(props: propsType) {

    return (
        <Parent>
            実装中です。
            <IconComponent
                icon={RxCross1}
                onclick={props.closeModal}
                style={{
                    "text-align": "right",
                    "position": "absolute",
                    "right": "2%",
                }}
            />
        </Parent>
    );
}