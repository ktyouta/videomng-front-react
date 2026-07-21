import { CSSProperties } from "react";
import styled from "styled-components";


const Container = styled.div<{ color?: string, backgroundColor?: string, borderRadius?: string, showBorder?: boolean, borderColor?: string }>`
  display: inline-flex;
  background: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : "#f1f3f5")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "7px")};
  ${({ showBorder, color, borderColor }) => (
    showBorder === false
      ? (borderColor ? `border: 1px solid ${borderColor};` : "")
      : `box-shadow: inset 0 0 0 1.5px ${color ? color : "#4f63ff"};`
  )}
  overflow: hidden;
`;

const SegmentButton = styled.button<{ active?: boolean, color?: string, inactiveColor?: string }>`
  appearance: none;
  border: none;
  padding: 6px 18px;
  font-size: 15px;
  cursor: pointer;
  background: ${({ active, color }) => (active ? color ? color : "#4f63ff" : "transparent")};
  color: ${({ active, inactiveColor }) => (active ? "#ffffff" : (inactiveColor ? inactiveColor : "#666666"))};
  box-shadow: ${({ active }) => (active ? "0 2px 6px rgba(37,99,235,0.35)" : "none")};
  transition: background-color 0.15s ease, color 0.15s ease, box-shadow 0.15s ease;
  position: relative;
  border-radius: 0;
  flex: 1;
  &:not(:first-child) {
    border-left: 1px solid rgba(0, 0, 0, 0.08);
  }
  &:focus,
  &:focus-visible,
  &:active {
    outline: none;
    box-shadow: ${({ active }) => (active ? "0 2px 6px rgba(37,99,235,0.35)" : "none")};
  }
  white-space: nowrap;
`;

type Option = {
    label: string;
    value: string;
};

type propsType = {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    outerStyle?: CSSProperties;
    buttonStyle?: CSSProperties;
    color?: string;
    backgroundColor?: string;
    inactiveColor?: string;
    borderRadius?: string;
    // falseの場合、内側の色付きボーダー（box-shadow）の代わりにborderColorの通常ボーダーを使う
    showBorder?: boolean;
    borderColor?: string;
};

export function SegmentedControl(props: propsType) {

    return (
        <Container
            role="radiogroup"
            style={props.outerStyle}
            color={props.color}
            backgroundColor={props.backgroundColor}
            borderRadius={props.borderRadius}
            showBorder={props.showBorder}
            borderColor={props.borderColor}
        >
            {props.options.map((opt) => (
                <SegmentButton
                    key={opt.value}
                    type="button"
                    role="radio"
                    aria-checked={props.value === opt.value}
                    active={props.value === opt.value}
                    onClick={() => props.onChange(opt.value)}
                    style={props.buttonStyle}
                    color={props.color}
                    inactiveColor={props.inactiveColor}
                >
                    {opt.label}
                </SegmentButton>
            ))}
        </Container>
    );
}
