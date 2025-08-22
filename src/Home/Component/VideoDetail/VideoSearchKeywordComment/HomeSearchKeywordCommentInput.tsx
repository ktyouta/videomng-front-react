import styled from "styled-components";
import BaseTextbox from "../../../../Common/Component/BaseTextbox";
import { IconComponent } from "../../../../Common/Component/IconComponent";
import { FaArrowUp } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { ClearableTextbox } from "../../../../Common/Component/ClearableTextbox";
import { useHomeSearchKeywordCommentInput } from "../../../Hook/VideoDetail/VideoSearchKeywordComment/useHomeSearchKeywordCommentInput";
import { MEDIA } from "../../../../Common/Const/MediaConst";


const MemoInputAreaDiv = styled.div`
  position: absolute;
  bottom: 12px;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding-left: 3%;
  display:flex;
  height: 38px;
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



export function HomeSearchKeywordCommentInput() {

  console.log("HomeSearchKeywordCommentInput render");

  const {
    searchKeywordCommentKeyword,
    setSearchKeywordCommentKeyword,
    clickSearchBtn,
    clearInputKeyword,
    isMobile,
    handleKeyPress,
  } = useHomeSearchKeywordCommentInput();

  const inputWidth = isMobile ? "88%" : "92%";

  return (
    <MemoInputAreaDiv>
      <ClearableTextbox
        width={inputWidth}
        height="100%"
        placeholder="キーワード"
        value={searchKeywordCommentKeyword}
        onChange={setSearchKeywordCommentKeyword}
        style={{
          borderBottomLeftRadius: 5,
          borderTopLeftRadius: 5,
        }}
        clear={clearInputKeyword}
        onKeyDown={handleKeyPress}
      />
      <SearchIconAreaDiv>
        <IconComponent
          icon={IoSearch}
          onclick={() => { clickSearchBtn() }}
          size="70%"
        />
      </SearchIconAreaDiv>
    </MemoInputAreaDiv>
  );
}