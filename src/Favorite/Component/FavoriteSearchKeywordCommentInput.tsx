import styled from "styled-components";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import { IconComponent } from "../../Common/Component/IconComponent";
import { FaArrowUp } from "react-icons/fa";
import { useFavoriteMemoCreateInput } from "../Hook/useFavoriteMemoCreateInput";
import { useFavoriteSearchKeywordCommentInput } from "../Hook/useFavoriteSearchKeywordCommentInput";
import { IoSearch } from "react-icons/io5";


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
  height: 37px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 15%;
  border-bottom-right-radius: 15%;
  color:#213547;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type propsType = {
    videoId: string,
}


export function FavoriteSearchKeywordCommentInput(props: propsType) {

    console.log("FavoriteSearchKeywordCommentInput render");

    const {
        inputKeyword,
        setInputKeyword,
        clickSearchBtn,
    } = useFavoriteSearchKeywordCommentInput();

    return (
        <MemoInputAreaDiv>
            <BaseTextbox
                textWidth="92%"
                placeholder="キーワード"
                value={inputKeyword}
                onChange={setInputKeyword}
                style={{
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    height: "33px",
                }}
            />
            <SearchIconAreaDiv>
                <IconComponent
                    icon={IoSearch}
                    onclick={() => { clickSearchBtn(props.videoId) }}
                    size="70%"
                />
            </SearchIconAreaDiv>
        </MemoInputAreaDiv>
    );
}