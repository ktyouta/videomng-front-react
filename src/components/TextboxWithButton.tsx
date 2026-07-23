import { CSSProperties } from "react";
import { IconType } from "react-icons";
import styled from "styled-components";
import { MEDIA } from "../consts/MediaConst";
import { ClearableTextbox } from "./ClearableTextbox";
import { IconComponent } from "./IconComponent";


const RADIUS_DEFAULT = "6px";
// Parentの角丸とSearchIconAreaDiv自身の角丸は別々に計算されるため、端数のズレで角に継ぎ目が出る。内側の丸みを少し小さくして継ぎ目を覆う
const CORNER_SEAM_COMPENSATION = "1px";

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

const ICON_AREA_BG_COLOR_DEFAULT = "#FF9900";

const SearchIconAreaDiv = styled.div<{ width: string, mobileWidth: string, radius: string, bgColor?: string, }>`
  background-color:${({ bgColor }) => (bgColor ?? ICON_AREA_BG_COLOR_DEFAULT)};
  height: 100%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: calc(${({ radius }) => (radius ?? RADIUS_DEFAULT)} - ${CORNER_SEAM_COMPENSATION});
  border-bottom-right-radius: calc(${({ radius }) => (radius ?? RADIUS_DEFAULT)} - ${CORNER_SEAM_COMPENSATION});
  display: flex;
  align-items: center;
  justify-content: center;
  width:${({ mobileWidth }) => (mobileWidth)};
  cursor: pointer;

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
  iconSize?: string,
  onClick: () => void,
  outerWidth: string,
  outerMobileWidth: string,
  outerHeight: string,
  iconWidth: string,
  iconMobileWidth: string,
  radius?: string,
  iconAreaBgColor?: string,
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
          if (event.key === 'Enter' && props.onClick) {
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
        bgColor={props.iconAreaBgColor}
        onClick={props.onClick}
      >
        <IconComponent
          icon={props.icon}
          size={props.iconSize || "75%"}
        />
      </SearchIconAreaDiv>
    </Parent>
  );
}