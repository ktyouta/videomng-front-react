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

const Parent = styled.div`
  width: 100%;
  height: 10%;
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
`;

const SearchIconAreaDiv = styled.div`
  background-color:#FF9900;
  width: 6%;
  height: 37px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 15%;
  border-bottom-right-radius: 15%;
`;

const SpaceDiv = styled.div`
    flex:1;
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
        setVideoTypeSelectValue } = useHomeSearchArea();

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
                        height: "34px",
                    }}
                />
                <SearchIconAreaDiv>
                    <IconComponent
                        icon={IoSearch}
                        onclick={clickSearchBtn}
                        size="90%"
                    />
                </SearchIconAreaDiv>
            </TextBoxAreaDiv>
            <SpaceDiv />
            <ComboComponent
                combo={VIDEO_TYPE_LIST}
                initValue={VIDEO_TYPE_LIST[0].value}
                onChange={setVideoTypeSelectValue}
                width="10%"
                minWidth="8%"
                height="39px"
            />
            {/* <ButtonComponent
                styleTypeNumber="BASE"
                title={"フィルター"}
                onclick={() => { }}
                style={{
                    "fontSize": "0.9rem",
                    "height": "41px",
                    "width": "13%",
                    "background": "#66696e",
                    "color": "white",
                    "borderRadius": "5",
                }}
            /> */}
        </Parent>
    );
}