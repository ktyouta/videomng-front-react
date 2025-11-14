import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHeaderMenuUl } from "../../hooks/Menu/useHeaderMenuUl";
import { ROUTER_PATH } from "../../../../consts/RouterPath";
import { MEDIA } from "../../../../consts/MediaConst";
import { useHeaderMenuUlMobile } from "../../hooks/Menu/useHeaderMenuUlMobile";
import { Selectbox } from "../../../../components/Selectbox";


const Parent = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
`;

const MenuTitleSpan = styled.span`
    color: white;
    margin-right: 2%;
    font-size: 13px;
`;


export function HeaderMenuUlMobile() {

    console.log(`HeaderMenuUlMobile render`);

    const {
        nowPath,
        menuList,
        selectMenu } = useHeaderMenuUlMobile();

    return (
        <Parent>
            <MenuTitleSpan>
                画面切替：
            </MenuTitleSpan>
            <Selectbox
                options={menuList}
                value={nowPath ?? ``}
                onChange={selectMenu}
                width="65%"
                minWidth="150px"
                height="37px"
                backgroundColor="rgb(24, 26, 30)"
                color="white"
                fontSize="11px"
            />
        </Parent>
    );
}