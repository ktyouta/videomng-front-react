import { IconType } from "react-icons";
import styled from "styled-components";
import { IconComponent } from "../../../../../components/IconComponent";
import { MEDIA } from "../../../../../consts/MediaConst";
import {
    FAVORITE_SEARCH_AREA_ACCENT_COLOR,
    FAVORITE_SEARCH_AREA_BUTTON_BG,
    FAVORITE_SEARCH_AREA_BUTTON_HOVER_BG,
} from "../../../const/FavoriteConst";


const LabelSpan = styled.span`
  color: white;
  font-size: 12px;
  transition: color 0.15s ease;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 12px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 14px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 14px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 39px;
  padding: 0 14px;
  margin-right: 12px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: ${FAVORITE_SEARCH_AREA_BUTTON_BG};
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.15s ease, transform 0.15s ease;

  &:hover {
    background-color: ${FAVORITE_SEARCH_AREA_BUTTON_HOVER_BG};
    transform: translateY(-1px);
  }

  &:hover ${LabelSpan} {
    color: ${FAVORITE_SEARCH_AREA_ACCENT_COLOR};
  }
`;

type propsType = {
    icon: IconType,
    label: string,
    onClick: () => void,
}

/**
 * 検索条件エリアの操作ボタン
 */
export function FavoriteSearchActionButton(props: propsType) {

    return (
        <ButtonWrapper
            onClick={props.onClick}
        >
            <IconComponent
                icon={props.icon}
                size="16px"
                bgColor="white"
            />
            <LabelSpan>
                {props.label}
            </LabelSpan>
        </ButtonWrapper>
    );
}
