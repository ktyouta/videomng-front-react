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

const Parent = styled.div`
  width: 100%;
  height: 41px;
  display:flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-right: 13%;
  padding-left: 22%;
`;

const TextBoxAreaDiv = styled.div`
  width: 83%;
  height: 100%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 5%;
`;

const SearchIconAreaDiv = styled.div`
  background-color:#FF9900;
  width: 46px;
  height: 99%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 15%;
  border-bottom-right-radius: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
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
        closeFilterModal, } = useHomeSearchArea();

    return (
        <Parent>
            <TextBoxAreaDiv>
                <BaseTextbox
                    textWidth="100%"
                    placeholder="キーワード"
                    value={keyword}
                    onChange={setKeyword}
                    style={{
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                        height: "99%",
                        boxSizing: "border-box",
                    }}
                />
                <SearchIconAreaDiv>
                    <IconComponent
                        icon={IoSearch}
                        onclick={clickSearchBtn}
                        size="75%"
                    />
                </SearchIconAreaDiv>
            </TextBoxAreaDiv>
            <ButtonComponent
                styleTypeNumber="BASE"
                title={"条件を指定"}
                onclick={openFilterModal}
                style={{
                    fontSize: "0.9rem",
                    height: "41px",
                    width: "13%",
                    background: "#29323c",
                    color: "white",
                    borderRadius: "5",
                    minWidth: "112px"
                }}
            />
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