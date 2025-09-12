import React from "react";
import styled from "styled-components";
import { useHomeSearchConditionModal } from "../../../Hook/VideoList/SearchArea/useHomeSearchConditionModal";
import ModalComponent from "../../../../Common/Component/ModalComponent";
import { HomeSearchCondition } from "./HomeSearchCondition";
import { OverlayDiv } from "../../../../Common/StyledComponent/OverlayDiv";
import { IconComponent } from "../../../../Common/Component/IconComponent";
import { MdTune } from 'react-icons/md';


const SearchConditionIconAreaDiv = styled.div`
  width: 46px;
  height: 99%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 15%;
  border-bottom-right-radius: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  color:#9e9e9e;
`;

const SearchConditionTitleSpan = styled.span`
  color: #9e9e9e;
  font-size: 14px;
  &:hover {
    cursor: pointer;
  }
`;

export function HomeSearchConditionModal() {

    console.log("HomeSearchConditionModal render");

    const {
        isOpenFilterModal,
        openFilterModal,
        closeFilterModal,
        isMobile } = useHomeSearchConditionModal();

    const searchConditionModalWidth = isMobile ? "59%" : "42%";

    return (
        <React.Fragment>
            {/* 検索条件展開用ボタン */}
            <SearchConditionIconAreaDiv>
                <IconComponent
                    icon={MdTune}
                    onclick={openFilterModal}
                    size="85%"
                />
            </SearchConditionIconAreaDiv>
            {
                !isMobile &&
                <SearchConditionTitleSpan
                    onClick={openFilterModal}
                >
                    条件を指定
                </SearchConditionTitleSpan>
            }
            {
                // 検索条件指定モーダル
                isOpenFilterModal &&
                <ModalComponent
                    modalIsOpen={isOpenFilterModal}
                    closeModal={closeFilterModal}
                    style={{
                        backgroundColor: "#181a1e",
                        borderRadius: "1%",
                        border: "solid 1px",
                        color: "white"
                    }}
                    width={searchConditionModalWidth}
                    height="50%"
                    isPositionCenter={true}
                >
                    <HomeSearchCondition
                        close={closeFilterModal}
                    />
                </ModalComponent>
            }
            {
                isOpenFilterModal &&
                <OverlayDiv />
            }
        </React.Fragment>
    );
}