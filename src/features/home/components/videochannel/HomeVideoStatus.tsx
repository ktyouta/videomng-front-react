import { ReactNode } from "react";
import styled from "styled-components";
import ButtonComponent from "../../../../components/ButtonComponent";
import { ICON_CIRCLE_BG_COLOR } from "../../../../consts/ButtonInteractionConst";
import { MEDIA } from "../../../../consts/MediaConst";

// 補助テキスト・アイコンの既定色（画面内の件数表示と同じグレー）
const SUB_TEXT_COLOR = "rgb(158, 158, 158)";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  padding: 0 8%;
  margin-top: 22%;
  gap: 16px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    margin-top: 14%;
    gap: 20px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    margin-top: 8%;
    gap: 20px;
  }

  @media (min-width: ${MEDIA.PC}) {
    margin-top: 6%;
    gap: 22px;
  }
`;

const IconCircle = styled.div<{ iconColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${ICON_CIRCLE_BG_COLOR};
  color: ${({ iconColor }) => iconColor};
  font-size: 26px;

  @media (min-width: ${MEDIA.TABLET}) {
    width: 80px;
    height: 80px;
    font-size: 32px;
  }
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Title = styled.p`
  color: white;
  margin: 0;
  font-size: 16px;
  font-weight: bold;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 18px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 20px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  color: ${SUB_TEXT_COLOR};
  margin: 0;
  font-size: 12px;
  line-height: 1.6;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 13px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 14px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 14px;
  }
`;

type propsType = {
  // 表示するアイコン要素
  icon: ReactNode,
  // アイコンの色（未指定時は補助テキストと同じグレー）
  iconColor?: string,
  // 見出し
  title: string,
  // 補足文
  description: string,
  // アクションボタンのラベル（未指定時はボタンを表示しない）
  actionLabel?: string,
  // アクションボタン押下時の処理
  onAction?: () => void,
}

export function HomeVideoStatus(props: propsType) {

  console.log("HomeVideoStatus render");

  const iconColor = props.iconColor ?? SUB_TEXT_COLOR;

  return (
    <Wrapper>
      <IconCircle iconColor={iconColor}>
        {props.icon}
      </IconCircle>
      <TextGroup>
        <Title>
          {props.title}
        </Title>
        <Description>
          {props.description}
        </Description>
      </TextGroup>
      {
        props.actionLabel && props.onAction &&
        <ButtonComponent
          variant="blue"
          shape="rounded"
          onClick={props.onAction}
        >
          {props.actionLabel}
        </ButtonComponent>
      }
    </Wrapper>
  );
}
