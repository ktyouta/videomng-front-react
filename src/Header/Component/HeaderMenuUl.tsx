import { Link } from "react-router-dom";
import styled from "styled-components";
import { HOME_ROOT_PATH } from "../../Home/Const/HomeConst";
import { useHeaderMenuUl } from "../Hook/useHeaderMenuUl";


const NavUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 70%;
`;

const NavLi = styled.li<{ isActive: boolean }>`
  height:100%;
  margin-right: 20px;
  color:white;
  font-size: 22px;
  cursor:pointer;
  &:hover {
    color: black;
    background-color: white;
  }
  background: ${({ isActive }) => (isActive ? "radial-gradient(50% 50% at 50% 0, rgba(var(--action-background-color,255,255,255),.8) 0, transparent 100%), hsla(0, 0%, 100%, .2);" : "")};
  box-shadow: ${({ isActive }) => (isActive ? "0 -4px 16px 0 rgba(var(--action-background-color,255,255,255),.2)" : "")};
  padding-left: 1%;
  padding-right: 1%;
  border-radius: 7%;
  font-weight:400;
`;

export function HeaderMenuUl() {

    console.log(`HeaderMenuUl render`);

    const { nowPath } = useHeaderMenuUl();

    return (
        <NavUl>
            <NavLi
                isActive={nowPath === HOME_ROOT_PATH}
            >
                <Link
                    to={HOME_ROOT_PATH}
                    style={{ color: "inherit", fontWeight: "inherit" }}
                >
                    ホーム
                </Link>
            </NavLi>
        </NavUl>
    );
}