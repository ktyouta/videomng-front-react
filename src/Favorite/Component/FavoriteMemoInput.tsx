import styled from "styled-components";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import { IconComponent } from "../../Common/Component/IconComponent";
import { FaArrowUp } from "react-icons/fa";
import { useFavoriteMemoInput } from "../Hook/useFavoriteMemoInput";


const MemoInputAreaDiv = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding-left: 3%;
  display:flex;
`;

const SearchIconAreaDiv = styled.div`
  background-color:#FF9900;
  width: 4%;
  height: 38px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 15%;
  border-bottom-right-radius: 15%;
  color:#213547;
`;

type propsType = {
    videoId: string,
}


export function FavoriteMemoInput(props: propsType) {

    console.log("FavoriteMemoInput render");

    const {
        inputMemo,
        setInputMemo,
        addToMemo
    } = useFavoriteMemoInput();

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
                    height: "34px",
                }}
            />
            <SearchIconAreaDiv>
                <IconComponent
                    icon={FaArrowUp}
                    onclick={() => { addToMemo(props.videoId) }}
                    size="90%"
                />
            </SearchIconAreaDiv>

        </MemoInputAreaDiv>
    );
}