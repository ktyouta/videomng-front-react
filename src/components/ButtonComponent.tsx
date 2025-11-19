import styled from "styled-components";
import { CSSProperties } from "react";

type ButtonVariant =
  | "base"
  | "green"
  | "red"
  | "blue"
  | "grad-gray"
  | "orange"
  | "black";

type ButtonSize = "small" | "medium" | "large";

type propsType = {
  variant?: ButtonVariant,
  size?: ButtonSize,
  shape?: ButtonShape,
  children: React.ReactNode,
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const sizeStyles: Record<ButtonSize, CSSProperties> = {
  small: { padding: "9px 19px", fontSize: "12px" },
  medium: { padding: "11px 29px", fontSize: "14px" },
  large: { padding: "12px 28px", fontSize: "16px" },
};

type ButtonShape = "default" | "rounded";

const shapeStyles: Record<ButtonShape, CSSProperties> = {
  default: { borderRadius: "6px" },
  rounded: { borderRadius: "23px" },
};

const variantStyles: Record<ButtonVariant, CSSProperties> = {
  base: {
    background: "#d3d3d3",
    color: "#000",
  },
  green: {
    background: "rgb(34, 139, 84)",
    color: "#fff",
  },
  red: {
    background: "#eb3941",
    color: "#fff",
  },
  blue: {
    background: "rgb(30, 90, 170)",
    color: "#fff",
  },
  orange: {
    background: "#ff9f00",
    color: "#fff",
  },
  black: {
    background: "black",
    color: "#fff",
  },
  "grad-gray": {
    background:
      "linear-gradient(to right, #29323c, #485563, #2b5876, #29323c)",
    boxShadow: "0 1px 5px 0 rgba(45, 54, 65, 0.75)",
    color: "#fff",
  },
};

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  text-align: center;
  background-size: 200%;
  transition: background-position 0.3s ease;
  &:hover {
    background-position: 100%;
  }
`;


const ButtonComponent = ({
  variant = "base",
  size = "medium",
  shape = "default",
  title,
  style,
  children,
  ...rest
}: propsType) => {

  return (
    <StyledButton
      {...rest}
      style={{
        ...sizeStyles[size],
        ...variantStyles[variant],
        ...shapeStyles[shape],
        ...style,
      }}
    >
      {children}
    </StyledButton>
  );
};

export default ButtonComponent;