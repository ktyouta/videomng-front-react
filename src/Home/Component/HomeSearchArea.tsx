import React from "react";
import styled from "styled-components";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import { useHomeSearchArea } from "../Hook/useHomeSearchArea";
import { IoSearch } from "react-icons/io5";
import { IconComponent } from "../../Common/Component/IconComponent";
import { IconBaseProps } from "react-icons";
import ComboComponent from "../../Common/Component/ComboComponent";
import { VIDEO_TYPE_LIST } from "../Const/HomeConst";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import ModalComponent from "../../Common/Component/ModalComponent";
import { OverlayDiv } from "../../Common/StyledComponent/OverlayDiv";
import { HomeSearchCondition } from "./HomeSearchCondition";
import { FlexSpaceDiv } from "../../Common/StyledComponent/FlexSpaceDiv";
import { ClearableTextbox } from "../../Common/Component/ClearableTextbox";
import { MdTune } from 'react-icons/md';
import { MEDIA } from "../../Common/Const/MediaConst";

const Parent = styled.div`
  width: 100%;
  height: 41px;
  display:flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-right: 12%;
  padding-left: 17%;
`;

const TextBoxAreaDiv = styled.div`
  width: 78%;
  height: 100%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 1%;
`;

const SearchIconAreaDiv = styled.div`
  background-color:#FF9900;
  width: 47px;
  height: 99%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 15%;
  border-bottom-right-radius: 15%;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 35px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    width: 35px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    width: 40px;
  }

  @media (min-width: ${MEDIA.PC}) {
    width: 47px;
  }
`;

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
`;

/**
 * 検索条件エリア
 */
export function HomeSearchArea() {

    console.log("HomeSearchArea render");

    const {
        keyword,
        setKeyword,
        clickSearchBtn,
        isOpenFilterModal,
        openFilterModal,
        closeFilterModal,
        clearInput,
        isSp, } = useHomeSearchArea();

    return (
        <Parent>
            <TextBoxAreaDiv>
                <ClearableTextbox
                    width="89%"
                    height="99%"
                    placeholder="キーワード"
                    value={keyword}
                    onChange={setKeyword}
                    style={{
                        borderBottomLeftRadius: 5,
                        borderTopLeftRadius: 5,
                    }}
                    clear={clearInput}
                />
                <SearchIconAreaDiv>
                    <IconComponent
                        icon={IoSearch}
                        onclick={clickSearchBtn}
                        size="75%"
                    />
                </SearchIconAreaDiv>
            </TextBoxAreaDiv>
            <SearchConditionIconAreaDiv>
                <IconComponent
                    icon={MdTune}
                    onclick={openFilterModal}
                    size="85%"
                />
            </SearchConditionIconAreaDiv>
            {
                !isSp &&
                <SearchConditionTitleSpan>
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
                    width="26%"
                    height="50%"
                    positionTop="22%"
                    positionLeft="35%"
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
        </Parent>
    );
}