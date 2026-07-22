import React from "react";
import { MdTune } from 'react-icons/md';
import styled from "styled-components";
import { IconComponent } from "../../../../../components/IconComponent";
import { ModalPortal } from "../../../../../components/ModalPortal";
import {
    HOME_SEARCH_AREA_ACCENT_COLOR,
    HOME_SEARCH_AREA_BUTTON_BG,
    HOME_SEARCH_AREA_BUTTON_HOVER_BG,
} from "../../../const/HomeConst";
import { useHomeSearchConditionModal } from "../../../hooks/videolist/searcharea/useHomeSearchConditionModal";
import { HomeSearchCondition } from "./HomeSearchCondition";


const SearchConditionTitleSpan = styled.span`
  color: #9e9e9e;
  font-size: 14px;
  transition: color 0.15s ease;
`;

const TriggerWrapperDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 39px;
  padding: 0 14px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: ${HOME_SEARCH_AREA_BUTTON_BG};
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.15s ease, transform 0.15s ease;

  &:hover {
    background-color: ${HOME_SEARCH_AREA_BUTTON_HOVER_BG};
    transform: translateY(-1px);
  }

  &:hover ${SearchConditionTitleSpan} {
    color: ${HOME_SEARCH_AREA_ACCENT_COLOR};
  }
`;

export function HomeSearchConditionModal() {

    console.log("HomeSearchConditionModal render");

    const {
        isOpenFilterModal,
        openFilterModal,
        closeFilterModal,
        isMobile } = useHomeSearchConditionModal();


    return (
        <React.Fragment>
            {/* 検索条件展開用ボタン */}
            <TriggerWrapperDiv
                onClick={openFilterModal}
            >
                <IconComponent
                    icon={MdTune}
                    size="16px"
                    bgColor="#9e9e9e"
                />
                {
                    !isMobile &&
                    <SearchConditionTitleSpan>
                        条件を指定
                    </SearchConditionTitleSpan>
                }
            </TriggerWrapperDiv>
            {/* 検索条件指定モーダル */}
            <ModalPortal
                isOpen={isOpenFilterModal}
                modalWidth={isMobile ? `93%` : `45%`}
                modalMinHeight="55%"
                isCloseOuter={true}
                close={closeFilterModal}
            >
                <HomeSearchCondition
                    isMobile={isMobile}
                />
            </ModalPortal>
        </React.Fragment>
    );
}