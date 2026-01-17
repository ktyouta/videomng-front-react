import { CSSProperties } from "react";
import styled from "styled-components";


const Container = styled.div<{ color?: string }>`
  display: inline-flex;
  background: #f1f3f5;
  border-radius: 7px;
  box-shadow: inset 0 0 0 1.5px ${({ color }) => (color ? color : "#4f63ff")};
  overflow: hidden;
`;

const SegmentButton = styled.button<{ active?: boolean, color?: string }>`
  appearance: none;
  border: none;
  padding: 6px 18px;
  font-size: 15px;
  cursor: pointer;
  background-color: ${({ active, color }) => (active ? color ? color : "#4f63ff" : "transparent")};
  color: ${({ active }) => (active ? "#ffffff" : "#666666")};
  box-shadow: ${({ active }) => (active ? "0 1px 3px rgba(0,0,0,0.15)" : "none")};
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
    box-shadow: ${({ active }) => (active ? "0 1px 3px rgba(0,0,0,0.15)" : "none")};
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
};

export function SegmentedControl(props: propsType) {

    return (
        <Container
            role="radiogroup"
            style={props.outerStyle}
            color={props.color}
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
                >
                    {opt.label}
                </SegmentButton>
            ))}
        </Container>
    );
}
