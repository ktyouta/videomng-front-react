import React, { forwardRef, useEffect, useState } from 'react';
import styled, { CSSProperties } from "styled-components";

//引数の型
type propsType = {
    value?: string,
    length?: number,
    titleWidth?: string,
    textWidth?: string,
    bgColor?: string,
    height?: string,
    isNotResize?: boolean,
    onChange?: (e: string) => void,
    placeholder?: string,
    disabled?: boolean,
    style?: CSSProperties,
}

//参照の型
export type refType = {
    refValue: string,
    clearValue: () => void
}

//テキストエリアの基本スタイル
const BaseInput = styled.textarea<{ textWidth?: string, bgColor?: string, height?: string, isNotResize?: boolean }>`
  width: ${({ textWidth }) => (textWidth ? textWidth : "400px")};
  background-color:${({ bgColor }) => (bgColor ?? "")};
  height:${({ height }) => (height ? height : "70px")};
  border-radius: 5px;
  border:solid 1px rgb(118, 118, 118);
  resize: ${({ isNotResize }) => (isNotResize ? "none" : "")};
`;

const BaseTextAreaComponent = forwardRef<refType, propsType>((props, ref) => {

    //テキストエリアの入力値
    const [inputValue, setInputValue] = useState<string>(props.value ?? "");

    //テキストエリアの入力値を割り当てる
    React.useImperativeHandle(ref, () => ({
        refValue: inputValue,
        clearValue: clearInput
    }));

    //テキストエリアの入力イベント
    const changeInput: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        setInputValue(e.target.value);
        if (props.onChange) {
            props.onChange(e.target.value);
        }
    };

    //テキストエリアのクリアイベント
    const clearInput = () => {
        setInputValue(props.value ?? "");
    };

    useEffect(() => {
        setInputValue(props.value ?? "");
    }, [props.value]);

    return (
        <BaseInput
            maxLength={props.length}
            onChange={changeInput}
            value={inputValue}
            textWidth={props.textWidth}
            bgColor={props.bgColor}
            height={props.height}
            isNotResize={props.isNotResize}
            placeholder={props.placeholder}
            disabled={props.disabled}
            style={props.style}
        />
    );
})

export default BaseTextAreaComponent;