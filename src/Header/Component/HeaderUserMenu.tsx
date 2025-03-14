import React from "react";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import { useHeaderUserMenu } from "../Hook/useHeaderUserMenu";
import { IconComponent } from "../../Common/Component/IconComponent";
import { IoPersonCircleOutline } from "react-icons/io5";
import styled from "styled-components";
import { Z_INDEX_PARAM } from "../../Common/Const/CommonConst";


//ボタンのスタイル
const BtnDiv = styled.div`
  margin-left: 2%;
  margin-right: 5%;
  position:relative;
  align-items: center;
  width:47px;
`;

//ナビゲーション
const NavDiv = styled.div<{ isDisplay: boolean }>`
  position: absolute;
  top: 48px;
  left: -154px;
  font-size: 15px;
  width: 240px;
  height: auto;
  min-height: 169px;
  background-color: white;
  padding-top: 14px;
  border: 1px solid #a9a9a9;
  display: ${({ isDisplay }) => (isDisplay ? "block" : "none")};
  border-radius: 6px;
  z-index:${Z_INDEX_PARAM.HEADNAV};
  box-sizing: border-box;
`;

//コンテンツのスタイル
const ContentDiv = styled.div`
    cursor:pointer;
    &:hover {
        color: blue;
        text-decoration: underline;
    }
    min-height: 29px;
    padding-left: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
`;

//アイコンクリック時の背景のスタイル
const OverlayDiv = styled.div`
  position: absolute;
  opacity: 0.9;
  width: 100vw;
  height: 100vh;
  top: 0; 
  z-index: ${Z_INDEX_PARAM.HEADOVERLAY}; 
`;


export function HeaderUserMenu() {

    console.log(`HeaderUserMenu render`);

    const {
        clickLogin,
        isLogin,
        isOpenUserMenu,
        oepnUserMenu,
        closeUserMenu,
        clickLogout, } = useHeaderUserMenu();

    return (
        <React.Fragment>
            {
                isLogin ?
                    // ログイン時メニュー
                    <React.Fragment>
                        <BtnDiv>
                            <IconComponent
                                icon={IoPersonCircleOutline}
                                onclick={isOpenUserMenu ? closeUserMenu : oepnUserMenu}
                                size='100%'
                            />
                            <NavDiv
                                isDisplay={isOpenUserMenu}
                            >
                                <ContentDiv
                                    onClick={clickLogout}
                                >
                                    ログアウト
                                </ContentDiv>
                            </NavDiv>
                        </BtnDiv>
                        {
                            isOpenUserMenu &&
                            <OverlayDiv
                                onClick={closeUserMenu}
                            >
                            </OverlayDiv>
                        }
                    </React.Fragment>
                    :
                    <ButtonComponent
                        styleTypeNumber="GRAD_RED"
                        title={"ログイン"}
                        onclick={clickLogin}
                        style={{
                            fontSize: "0.9rem",
                            width: "7%",
                            height: "100%",
                        }}
                    />
            }
        </React.Fragment>

    );
}