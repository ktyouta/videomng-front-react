import { Link } from "react-router-dom";
import styled from "styled-components";
import { BUTTON_HOVER_ACCENT_COLOR, BUTTON_HOVER_BG_COLOR } from "../../../../consts/ButtonInteractionConst";
import { MEDIA } from "../../../../consts/MediaConst";
import { ROUTER_PATH } from "../../../../consts/RouterPath";
import { HEADER_FONT_SIZE_LARGE, HEADER_FONT_SIZE_SMALL } from "../../const/HeaderConst";
import { useHeaderMenuUlPc } from "../../hooks/Menu/useHeaderMenuUlPc";


const NAV_LI_MIN_HEIGHT = "44px";

const NavUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 35%;
  width: 70%;
`;

const NavLi = styled.li<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background: ${({ isActive }) => (isActive ? "radial-gradient(50% 50% at 50% 0, rgba(var(--action-background-color,255,255,255),.8) 0, transparent 100%), hsla(0, 0%, 100%, .2);" : "")};
  box-shadow: ${({ isActive }) => (isActive ? "0 -4px 16px 0 rgba(var(--action-background-color,255,255,255),.2)" : "")};
  border-radius: 5px;
  font-weight:400;
  color:white;
  margin-right:3%;
  cursor:pointer;
  min-width: 81px;
  min-height: ${NAV_LI_MIN_HEIGHT};
  transition: background-color 0.15s ease, color 0.15s ease;
  &:hover {
      color: ${BUTTON_HOVER_ACCENT_COLOR};
      background-color: ${BUTTON_HOVER_BG_COLOR};
  }
`;

const MenuLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0 17px;
    text-decoration: none;
    font-size: ${HEADER_FONT_SIZE_SMALL};

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
      font-size: ${HEADER_FONT_SIZE_SMALL};
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
      font-size: ${HEADER_FONT_SIZE_LARGE};
    }

    @media (min-width: ${MEDIA.PC}) {
      font-size: ${HEADER_FONT_SIZE_LARGE};
    }
`;

export function HeaderMenuUlPc() {

    console.log(`HeaderMenuUlPc render`);

    const {
        nowPath,
        isLogin } = useHeaderMenuUlPc();

    return (
        <NavUl>
            <NavLi
                isActive={nowPath === ROUTER_PATH.HOME.ROOT}
            >
                <MenuLink
                    to={ROUTER_PATH.HOME.ROOT}
                    style={{ color: "inherit", fontWeight: "inherit" }}
                >
                    ホーム
                </MenuLink>
            </NavLi>
            {
                isLogin &&
                <NavLi
                    isActive={nowPath === ROUTER_PATH.FAVORITE.ROOT}
                >
                    <MenuLink
                        to={ROUTER_PATH.FAVORITE.ROOT}
                        style={{ color: "inherit", fontWeight: "inherit" }}
                    >
                        お気に入り
                    </MenuLink>
                </NavLi>
            }
        </NavUl>
    );
}