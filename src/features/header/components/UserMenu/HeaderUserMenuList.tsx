import React from "react";
import { IoLockClosedOutline, IoLogOutOutline, IoPersonCircleOutline, IoPersonOutline } from "react-icons/io5";
import styled from "styled-components";
import { IconComponent } from "../../../../components/IconComponent";
import { Z_INDEX_PARAM } from "../../../../consts/CommonConst";
import { MEDIA } from "../../../../consts/MediaConst";
import { HEADER_FONT_SIZE_LARGE, HEADER_FONT_SIZE_SMALL, HEADER_PANEL_BG_COLOR, HEADER_PANEL_BORDER_COLOR, HEADER_PANEL_SHADOW, HEADER_PANEL_TRANSITION } from "../../const/HeaderConst";
import { useHeaderUserMenuList } from "../../hooks/UserMenu/useHeaderUserMenuList";
import { HeaderUserMenuContent } from "./HeaderUserMenuContent";


const NAV_HIDDEN_OFFSET_Y = "-8px";


// ユーザー情報エリアのスタイル
const UserDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

// アイコンのスタイル
const IconDiv = styled.div`
  position:relative;
  align-items: center;
  display: flex;
  cursor: pointer;
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
  visibility: ${({ isDisplay }) => (isDisplay ? "visible" : "hidden")};
  opacity: ${({ isDisplay }) => (isDisplay ? 1 : 0)};
  transform: ${({ isDisplay }) => (isDisplay ? "translateY(0)" : `translateY(${NAV_HIDDEN_OFFSET_Y})`)};
  transition: opacity ${HEADER_PANEL_TRANSITION}, visibility ${HEADER_PANEL_TRANSITION}, transform ${HEADER_PANEL_TRANSITION};
  border-radius: 6px;
  z-index:${Z_INDEX_PARAM.HEAD_NAV};
  box-sizing: border-box;
  background-color: ${HEADER_PANEL_BG_COLOR};
  border: 1px solid ${HEADER_PANEL_BORDER_COLOR};
  color: #f1f1f1;
  box-shadow: ${HEADER_PANEL_SHADOW};

  font-size: ${HEADER_FONT_SIZE_SMALL};

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: ${HEADER_FONT_SIZE_LARGE};
    width: 273px;
    left: -160px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: ${HEADER_FONT_SIZE_LARGE};
    width: 273px;
    left: -160px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: ${HEADER_FONT_SIZE_LARGE};
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

const USER_NAME_MAX_WIDTH = "120px";

// ユーザー名のスタイル
const UserNameSpan = styled.span`
  color:white;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  max-width: ${USER_NAME_MAX_WIDTH};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${HEADER_FONT_SIZE_SMALL};

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: ${HEADER_FONT_SIZE_LARGE};
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: ${HEADER_FONT_SIZE_LARGE};
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: ${HEADER_FONT_SIZE_LARGE};
  }
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
            <UserDiv
                onClick={clickUserIcon}
            >
                <UserNameSpan
                    title={loginUserInfo.userName}
                >
                    {loginUserInfo.userName}
                </UserNameSpan>
                <IconDiv>
                    <IconComponent
                        icon={IoPersonCircleOutline}
                        size={isMobile ? '30' : '40'}
                    />
                    <NavDiv
                        isDisplay={isOpenUserMenu}
                    >
                        <HeaderUserMenuContent
                            title="ユーザー情報更新"
                            icon={IoPersonOutline}
                            onClick={clickUpdateUserInfo}
                        />
                        <HeaderUserMenuContent
                            title="パスワードの変更"
                            icon={IoLockClosedOutline}
                            onClick={clickUpdateUserPassword}
                        />
                        <HeaderUserMenuContent
                            title="ログアウト"
                            icon={IoLogOutOutline}
                            onClick={clickLogout}
                        />
                    </NavDiv>
                </IconDiv>
            </UserDiv>
            {
                isOpenUserMenu &&
                <OverlayDiv
                    onClick={closeUserMenu}
                />
            }
        </React.Fragment>
    );
}