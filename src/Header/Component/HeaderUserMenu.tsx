import React from "react";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import { useHeaderUserMenu } from "../Hook/useHeaderUserMenu";
import { IconComponent } from "../../Common/Component/IconComponent";
import { IoPersonCircleOutline } from "react-icons/io5";
import styled from "styled-components";
import { Z_INDEX_PARAM } from "../../Common/Const/CommonConst";
import { MEDIA } from "../../Common/Const/MediaConst";


//ボタンのスタイル
const BtnDiv = styled.div`
  margin-left: 1%;
  margin-right: 5%;
  position:relative;
  align-items: center;
  width:47px;
  display: flex
`;

//ナビゲーション
const NavDiv = styled.div<{ isDisplay: boolean }>`
  position: absolute;
  left: -201px;
  top: 48px;
  width: 243px;
  height: auto;
  min-height: 200px;
  padding-top: 14px;
  display: ${({ isDisplay }) => (isDisplay ? "block" : "none")};
  border-radius: 6px;
  z-index:${Z_INDEX_PARAM.HEAD_NAV};
  box-sizing: border-box;
  background-color: #1c1f26;
  border: 1px solid #3a3f4b;
  color: #f1f1f1;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
  padding-left: 22px;

  font-size: 12px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 15px;
    width: 273px;
    left: -160px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 15px;
    width: 273px;
    left: -160px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 15px;
    width: 273px;
    left: -160px;
  }
`;

//コンテンツのスタイル
const ContentDiv = styled.div`
    cursor:pointer;
    &:hover {
        text-decoration: underline;
    }
    min-height: 29px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 2px;
`;

//アイコンクリック時の背景のスタイル
const OverlayDiv = styled.div`
  position: absolute;
  opacity: 0.9;
  width: 100vw;
  height: 100vh;
  top: 0; 
  z-index: ${Z_INDEX_PARAM.HEAD_OVERLAY}; 
`;

// ユーザー名のスタイル
const UserNameSpan = styled.span`
  color:white;
  display: inline-flex;
  align-items: center;
`;


export function HeaderUserMenu() {

    console.log(`HeaderUserMenu render`);

    const {
        clickLogin,
        isLogin,
        isOpenUserMenu,
        oepnUserMenu,
        closeUserMenu,
        clickLogout,
        loginUserInfo,
        clickUpdateUserInfo,
        clickUpdateUserPassword,
        isCheckedAuth,
        isMobile, } = useHeaderUserMenu();

    return (
        <React.Fragment>
            {
                // 認証チェック済み
                isCheckedAuth &&
                <React.Fragment>
                    {
                        isLogin ?
                            // ログイン時メニュー
                            <React.Fragment>
                                {
                                    !isMobile &&
                                    <UserNameSpan>
                                        {loginUserInfo.userName}
                                    </UserNameSpan>
                                }
                                <BtnDiv>
                                    <IconComponent
                                        icon={IoPersonCircleOutline}
                                        onclick={isOpenUserMenu ? closeUserMenu : oepnUserMenu}
                                        size={isMobile ? '65%' : '80%'}
                                    />
                                    <NavDiv
                                        isDisplay={isOpenUserMenu}
                                    >
                                        <ContentDiv
                                            onClick={clickUpdateUserInfo}
                                        >
                                            ユーザー情報更新
                                        </ContentDiv>
                                        <ContentDiv
                                            onClick={clickUpdateUserPassword}
                                        >
                                            パスワードの変更
                                        </ContentDiv>
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
                                    fontSize: isMobile ? "12px" : "14px",
                                    width: isMobile ? "82px" : "100px",
                                    minWidth: "82px",
                                    height: isMobile ? "38%" : "35%",
                                    background: "#eb3941",
                                    boxShadow: "none",
                                }}
                            />
                    }
                </React.Fragment>
            }
        </React.Fragment>
    );
}