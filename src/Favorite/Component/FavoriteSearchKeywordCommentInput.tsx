import styled from "styled-components";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import { IconComponent } from "../../Common/Component/IconComponent";
import { FaArrowUp } from "react-icons/fa";
import { useFavoriteMemoCreateInput } from "../Hook/useFavoriteMemoCreateInput";
import { useFavoriteSearchKeywordCommentInput } from "../Hook/useFavoriteSearchKeywordCommentInput";
import { IoSearch } from "react-icons/io5";
import { ClearableTextbox } from "../../Common/Component/ClearableTextbox";


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



export function FavoriteSearchKeywordCommentInput() {

    console.log("FavoriteSearchKeywordCommentInput render");

    const {
        searchKeywordCommentKeyword,
        setSearchKeywordCommentKeyword,
        clickSearchBtn,
        clearInputKeyword,
    } = useFavoriteSearchKeywordCommentInput();

    return (
        <MemoInputAreaDiv>
            <ClearableTextbox
                width="92%"
                height="100%"
                placeholder="キーワード"
                value={searchKeywordCommentKeyword}
                onChange={setSearchKeywordCommentKeyword}
                style={{
                    borderBottomLeftRadius: 5,
                    borderTopLeftRadius: 5,
                }}
                clear={clearInputKeyword}
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