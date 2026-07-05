import styled from "styled-components";

const MenuLi = styled.li`
  cursor:pointer;
`;

type propsType = {
    title: string,
    onClick: () => void,
}


export function HeaderSideMenuLi(props: propsType) {

    console.log(`HeaderSideMenuLi render`);

    return (
        <MenuLi
            onClick={props.onClick}
        >
            {props.title}
        </MenuLi>
    );
}