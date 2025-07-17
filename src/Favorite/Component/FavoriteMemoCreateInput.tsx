import styled from "styled-components";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import { IconComponent } from "../../Common/Component/IconComponent";
import { FaArrowUp } from "react-icons/fa";
import { useFavoriteMemoCreateInput } from "../Hook/useFavoriteMemoCreateInput";


const MemoInputAreaDiv = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding-left: 3%;
  display: flex;
  align-items: center;
  height: 37px;
`;

const SearchIconAreaDiv = styled.div`
  background-color:#FF9900;
  width: 4%;
  height: 100%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 15%;
  border-bottom-right-radius: 15%;
  color:#213547;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export function FavoriteMemoCreateInput() {

    console.log("FavoriteMemoCreateInput render");

    const {
        inputMemo,
        setInputMemo,
        addToMemo
    } = useFavoriteMemoCreateInput();

    return (
        <MemoInputAreaDiv>
            <BaseTextbox
                textWidth="92%"
                placeholder="メモ"
                value={inputMemo}
                onChange={setInputMemo}
                style={{
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    height: "100%",
                    boxSizing: "border-box",
                }}
            />
            <SearchIconAreaDiv>
                <IconComponent
                    icon={FaArrowUp}
                    onclick={() => { addToMemo() }}
                    size="70%"
                />
            </SearchIconAreaDiv>
        </MemoInputAreaDiv>
    );
}