import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import styled from "styled-components";
import { IconComponent } from "../../../../components/IconComponent";
import { Z_INDEX_PARAM } from "../../../../consts/CommonConst";
import { MEDIA } from "../../../../consts/MediaConst";
import { useHeaderUserMenuList } from "../../hooks/UserMenu/useHeaderUserMenuList";
import { HeaderUserMenuContent } from "./HeaderUserMenuContent";


// アイコンのスタイル
const IconDiv = styled.div`
  margin-left: 1%;
  margin-right: 5%;
  position:relative;
  align-items: center;
  width:47px;
  display: flex
`;

// ナビゲーション
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

// アイコンクリック時の背景のスタイル
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
  cursor: pointer;
`;


export function HeaderUserMenuList() {

    console.log(`HeaderUserMenuList render`);

    const {
        isOpenUserMenu,
        closeUserMenu,
        clickLogout,
        loginUserInfo,
        clickUpdateUserInfo,
        clickUpdateUserPassword,
        isMobile,
        clickUserIcon, } = useHeaderUserMenuList();

    return (
        // ログイン時メニュー
        <React.Fragment>
            {
                !isMobile &&
                <UserNameSpan
                    onClick={clickUserIcon}
                >
                    {loginUserInfo.userName}
                </UserNameSpan>
            }
            <IconDiv>
                <IconComponent
                    icon={IoPersonCircleOutline}
                    onclick={clickUserIcon}
                    size={isMobile ? '65%' : '80%'}
                />
                <NavDiv
                    isDisplay={isOpenUserMenu}
                >
                    <HeaderUserMenuContent
                        title="ユーザー情報更新"
                        onClick={clickUpdateUserInfo}
                    />
                    <HeaderUserMenuContent
                        title="パスワードの変更"
                        onClick={clickUpdateUserPassword}
                    />
                    <HeaderUserMenuContent
                        title="ログアウト"
                        onClick={clickLogout}
                    />
                </NavDiv>
            </IconDiv>
            {
                isOpenUserMenu &&
                <OverlayDiv
                    onClick={closeUserMenu}
                />
            }
        </React.Fragment>
    );
}