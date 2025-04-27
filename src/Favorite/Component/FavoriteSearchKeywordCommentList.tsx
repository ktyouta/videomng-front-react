import styled from "styled-components";
import { useFavoriteMemoList } from "../Hook/useFavoriteMemoList";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import { FavoriteMemoContent } from "./FavoriteMemoContent";
import LoadingBase from "../../Common/Component/LoadingBase";
import { FavoriteSearchKeywordCommentContent } from "./FavoriteSearchKeywordCommentContent";
import { useFavoriteSearchKeywordCommentList } from "../Hook/useFavoriteSearchKeywordCommentList";
import { SearchKeywordCommentType } from "../Type/SearchKeywordCommentType";


const Parent = styled.div`
  width: 100%;
  height: 90%;
  box-sizing: border-box;
  padding-left: 2%;
  padding-top: 2%;
  padding-right: 2%;
  color:white;
`;

const CommentListAreaDiv = styled.div`
  width: 97%;
  height: 90%;
  overflow: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 2% 1% 1% 1%;
`;


export function FavoriteSearchKeywordCommentList() {

    console.log("FavoriteSearchKeywordCommentList render");

    const {
        isLoading,
        searchCommentList,
        errMessage, } = useFavoriteSearchKeywordCommentList();

    if (isLoading) {
        return (
            <Parent>
                <LoadingBase />
            </Parent>
        );
    }

    if (errMessage) {
        return (
            <Parent>
                {errMessage}
            </Parent>
        );
    }

    return (
        <Parent>
            {
                !searchCommentList ?
                    `検索ワードを入力してください`
                    :
                    searchCommentList.length > 0 ?
                        <CommentListAreaDiv>
                            {
                                searchCommentList.map((e: SearchKeywordCommentType) => {

                                    const commentId = e.commentId;

                                    return (
                                        <FavoriteSearchKeywordCommentContent
                                            searchComment={e}
                                            commentId={commentId}
                                            key={commentId}
                                        />
                                    )
                                })
                            }
                        </CommentListAreaDiv>
                        :
                        `検索結果が存在しません。`
            }
        </Parent>
    );
}