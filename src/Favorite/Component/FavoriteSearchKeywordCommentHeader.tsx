import styled from "styled-components";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import { useFavoriteSearchKeywordCommentHeader } from "../Hook/useFavoriteSearchKeywordCommentHeader";


//ヘッダータイトルのスタイル
const HeaderDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
  position:relative;
`;

const HeaderTitleSpan = styled.span`
  font-size:19px;
`;


export function FavoriteSearchKeywordCommentHeader() {

    console.log("FavoriteSearchKeywordCommentHeader render");

    const { resetSearchKeywordCommentInfo } = useFavoriteSearchKeywordCommentHeader();

    return (
        <HeaderDiv>
            <HeaderTitleSpan>
                キーワード検索(コメント)
            </HeaderTitleSpan>
        </HeaderDiv>
    );
}