import { CSSProperties } from "react";
import styled from "styled-components";
import { ClearableTextbox } from "./ClearableTextbox";
import { MEDIA } from "../Const/MediaConst";
import { IconComponent } from "./IconComponent";
import { IconType } from "react-icons";


const RADIUS_DEFAULT = "6px";

const Parent = styled.div < { width: string, mobileWidth: string, height: string, bgColor?: string, radius?: string, } > `
  background-color:${({ bgColor }) => (bgColor ?? "white")};
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height:${({ height }) => (height)};
  border-radius: ${({ radius }) => (radius ?? RADIUS_DEFAULT)};
  width:${({ mobileWidth }) => (mobileWidth)};

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    width: ${({ mobileWidth }) => (mobileWidth)};
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    width: ${({ width }) => (width)};
  }

  @media (min-width: ${MEDIA.PC}) {
    width: ${({ width }) => (width)};
  }
`;

const SearchIconAreaDiv = styled.div<{ width: string, mobileWidth: string, radius: string, }>`
  background-color:#FF9900;
  height: 100%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: ${({ radius }) => (radius ?? RADIUS_DEFAULT)};
  border-bottom-right-radius: ${({ radius }) => (radius ?? RADIUS_DEFAULT)};
  display: flex;
  align-items: center;
  justify-content: center;
  width:${({ mobileWidth }) => (mobileWidth)};

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    width: ${({ mobileWidth }) => (mobileWidth)};
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    width: ${({ width }) => (width)};
  }

  @media (min-width: ${MEDIA.PC}) {
    width: ${({ width }) => (width)};
  }
`;

//引数の型
type propsType = {
    value?: string,
    length?: number,
    bgColor?: string,
    disabled?: boolean,
    onChange?: (e: string) => void,
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void,
    placeholder?: string,
    autoComplete?: boolean,
    textboxStyle?: CSSProperties,
    style?: CSSProperties,
    clear: () => void,
    onBlur?: () => void,
    iconStyle?: CSSProperties,
    backgroundColor?: string,
    icon: IconType,
    onClick: () => void,
    outerWidth: string,
    outerMobileWidth: string,
    outerHeight: string,
    iconWidth: string,
    iconMobileWidth: string,
    radius?: string,
}

export function TextboxWithButton(props: propsType) {

    return (
        <Parent
            width={props.outerWidth}
            mobileWidth={props.outerMobileWidth}
            height={props.outerHeight}
            radius={props.radius}
            style={props.style}
        >
            {/* テキストボックス */}
            <ClearableTextbox
                {...props}
                onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
                    if (event.key === 'Enter') {
                        props.onClick();
                    }
                }}
                style={{
                    flex: "1",
                    height: "100%",
                    borderBottomLeftRadius: props.radius ?? RADIUS_DEFAULT,
                    borderTopLeftRadius: props.radius ?? RADIUS_DEFAULT,
                    border: "none",
                    backgroundColor: props.backgroundColor,
                    minWidth: 0,
                    boxSizing: "border-box",
                }}
                textboxStyle={{
                    flex: "1",
                    paddingLeft: "7px",
                    paddingRight: "7px",
                }}
                iconStyle={{
                    width: "20px",
                    marginRight: "7px"
                }}
            />
            {/* 検索ボタン */}
            <SearchIconAreaDiv
                width={props.iconWidth}
                mobileWidth={props.iconMobileWidth}
                radius={props.radius ?? RADIUS_DEFAULT}
            >
                <IconComponent
                    icon={props.icon}
                    onclick={props.onClick}
                    size="75%"
                />
            </SearchIconAreaDiv>
        </Parent>
    );
}