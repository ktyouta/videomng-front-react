import { IconType } from "react-icons";
import styled from "styled-components";
import { IconComponent } from "../../../../components/IconComponent";

// ホバー時の背景色（操作ボタン群のホバー色と揃える）
const ITEM_HOVER_BG = "rgba(37, 99, 235, 0.18)";

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
    background-color: ${ITEM_HOVER_BG};
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
