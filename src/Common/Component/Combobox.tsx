import React, { forwardRef, useEffect, useState } from 'react';
import styled, { CSSProperties } from "styled-components";


//引数の型
type propsType = {
  combo: comboType[];
  selectStyle?: CSSProperties;
  optionStyle?: CSSProperties;
  bgColor?: string;
  height?: string;
  width?: string;
  minWidth?: string;
  minHeight?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;


//コンボボックスの型
export type comboType = {
  value: string,
  label: string
}

//コンボボックスの基本スタイル
const BaseSelect = styled.select<{ bgColor?: string, height?: string, width?: string, minWidth?: string, minHeight?: string }>`
  background-color:${({ bgColor }) => (bgColor ?? "")};
  text-align:center;
  width: ${({ width }) => (width ?? "300px")};
  min-width: ${({ minWidth }) => (minWidth ?? "200px")};
  height:${({ height }) => (height ?? "45px")};
  min-height:${({ minHeight }) => (minHeight ?? "30px")};
  border-radius: 5px;
`;


export function Combobox(props: propsType) {

  return (
    <BaseSelect
      onChange={props.onChange}
      value={props.value}
      bgColor={props.bgColor}
      height={props.height}
      width={props.width}
      minHeight={props.minHeight}
      minWidth={props.minWidth}
      style={props.selectStyle}
      id={props.id}
    >
      {
        props.combo && props.combo.length > 0 && props.combo.map((element) => {
          return (
            <option
              value={element.value}
              key={`${element.value}-${element.label}`}
              style={props.optionStyle}
            >
              {element.label}
            </option>
          );
        })
      }
    </BaseSelect>
  );
}