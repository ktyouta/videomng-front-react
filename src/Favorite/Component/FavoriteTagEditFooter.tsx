import styled from "styled-components";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import { IconComponent } from "../../Common/Component/IconComponent";
import { FaArrowUp } from "react-icons/fa";
import { useFavoriteMemoCreateInput } from "../Hook/useFavoriteMemoCreateInput";
import { FlexSpaceDiv } from "../../Common/StyledComponent/FlexSpaceDiv";
import { FavoriteTagEditCloseIcon } from "./FavoriteTagEditCloseIcon";
import { FavoriteTagEditUpdateIcon } from "./FavoriteTagEditUpdateIcon";


const MemoInputAreaDiv = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding-left: 3%;
  display:flex;
  align-items: center;
  height:4%;
  padding-right: 2%;
`;

const BlockIconDiv = styled.div`
  width: 5%;
  box-sizing: border-box;
  position:relative;
  display: flex;
  grid-column-gap: 10px;
`;

type propsType = {
    changeView: () => void,
}


export function FavoriteTagEditFooter(props: propsType) {

    console.log("FavoriteTagEditFooter render");

    return (
        <MemoInputAreaDiv>
            <FlexSpaceDiv />
            <BlockIconDiv>
                {/* 閉じるアイコン */}
                <FavoriteTagEditCloseIcon
                    changeView={props.changeView}
                />
                {/* 更新アイコン */}
                <FavoriteTagEditUpdateIcon
                    changeView={props.changeView}
                />
            </BlockIconDiv>
        </MemoInputAreaDiv>
    );
}