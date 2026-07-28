import { CSSProperties, ReactNode } from "react";
import styled from "styled-components";

// PC表示の見た目は変更しないため、既存の横並び時の値を踏襲する
const ROW_GAP = "16px";
// 項目間のmargin-bottomと区別が付くよう、横並び時より小さい値にする
const COLUMN_GAP = "4px";

const RowDiv = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: ${({ isMobile }) => isMobile ? "column" : "row"};
  align-items: ${({ isMobile }) => isMobile ? "stretch" : "center"};
  gap: ${({ isMobile }) => isMobile ? COLUMN_GAP : ROW_GAP};
  box-sizing: border-box;
  width: 100%;
`;

const RowLabel = styled.label`
  display: inline-block;
  white-space: nowrap;
  flex-shrink: 0;
`;

type propsType = {
  label: string;
  isMobile: boolean;
  labelStyle?: CSSProperties;
  outerStyle?: CSSProperties;
  children: ReactNode;
};

/**
 * ラベルと入力欄を、画面幅に応じて横並び/縦並びに切り替えて表示する
 */
export function LabeledFieldRow(props: propsType) {

  const { label, isMobile, labelStyle, outerStyle, children } = props;

  return (
    <RowDiv
      isMobile={isMobile}
      style={outerStyle}
    >
      <RowLabel
        style={labelStyle}
      >
        {label}
      </RowLabel>
      {children}
    </RowDiv>
  );
}
