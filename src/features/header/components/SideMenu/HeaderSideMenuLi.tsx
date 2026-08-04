import { IconType } from "react-icons";
import styled from "styled-components";
import { IconComponent } from "../../../../components/IconComponent";
import { BUTTON_HOVER_BG_COLOR } from "../../../../consts/ButtonInteractionConst";

const MenuLi = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 8px;
  box-sizing: border-box;
  transition: background-color 0.15s ease;
  padding-left: 12%;

  &:hover {
    background-color: ${BUTTON_HOVER_BG_COLOR};
  }
`;

type propsType = {
    title: string,
    icon: IconType,
    onClick: () => void,
}


export function HeaderSideMenuLi(props: propsType) {

    console.log(`HeaderSideMenuLi render`);

    return (
        <MenuLi
            onClick={props.onClick}
        >
            <IconComponent
                icon={props.icon}
                size="18px"
                style={{ color: "white" }}
            />
            {props.title}
        </MenuLi>
    );
}
