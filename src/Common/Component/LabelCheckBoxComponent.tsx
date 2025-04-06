import React, { forwardRef, useState } from 'react';
import CheckBoxComponent, { checkBoxRefType } from './CheckBoxComponent';
import styled from 'styled-components';
import LabelComponent from './LabelComponent';

//引数の型
type propsType = {
    title: string,
    value: string,
    htmlForId: string,
    onChange?: (e: string) => void,
    width?: string,
    disabled?: boolean,
    initValue: boolean,
    key?: string,
    onChangeBl?: (e: boolean) => void,
    outerStyle?: { [key: string]: string },
}

//ラベルチェックボックスの基本スタイル
const LabelCheckboxDiv = styled.div`
  display:flex;
  text-align: center;
  width: auto;
  align-items: center;
`;

const LabelCheckBoxComponent = forwardRef<checkBoxRefType, propsType>((props, ref) => {

    return (
        <LabelCheckboxDiv
            style={props.outerStyle}
        >
            <LabelComponent
                {...props}
            />
            <CheckBoxComponent
                {...props}
                ref={ref}
            />
        </LabelCheckboxDiv>
    );
})

export default LabelCheckBoxComponent;