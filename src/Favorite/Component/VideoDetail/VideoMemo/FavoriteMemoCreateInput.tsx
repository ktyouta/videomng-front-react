import styled from "styled-components";
import BaseTextbox from "../../../../Common/Component/BaseTextbox";
import { IconComponent } from "../../../../Common/Component/IconComponent";
import { FaArrowUp } from "react-icons/fa";
import { useFavoriteMemoCreateInput } from "../../../Hook/VideoDetail/VideoMemo/useFavoriteMemoCreateInput";
import { ClearableTextbox } from "../../../../Common/Component/ClearableTextbox";
import { MEDIA } from "../../../../Common/Const/MediaConst";


const MemoInputAreaDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  justify-content: center;  
  display: flex;
  align-items: center;
  height: 37px;
`;

const SearchIconAreaDiv = styled.div`
  background-color:#FF9900;
  height: 100%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 15%;
  border-bottom-right-radius: 15%;
  color:#213547;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    width: 34px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    width: 37px;
  }

  @media (min-width: ${MEDIA.PC}) {
    width: 37px;
  }
`;


export function FavoriteMemoCreateInput() {

  console.log("FavoriteMemoCreateInput render");

  const {
    inputMemo,
    setInputMemo,
    addToMemo,
    clearInputMemo,
    isMobile,
    handleKeyPress,
  } = useFavoriteMemoCreateInput();

  const inputWidth = isMobile ? "88%" : "92%";

  return (
    <MemoInputAreaDiv>
      <ClearableTextbox
        width={inputWidth}
        height="100%"
        placeholder="メモ"
        value={inputMemo}
        onChange={setInputMemo}
        style={{
          borderBottomLeftRadius: 5,
          borderTopLeftRadius: 5,
        }}
        clear={clearInputMemo}
        onKeyDown={handleKeyPress}
      />
      <SearchIconAreaDiv>
        <IconComponent
          icon={FaArrowUp}
          onclick={addToMemo}
          size="70%"
        />
      </SearchIconAreaDiv>
    </MemoInputAreaDiv>
  );
}