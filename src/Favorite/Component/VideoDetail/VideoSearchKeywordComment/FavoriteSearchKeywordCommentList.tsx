import styled from "styled-components";
import { useFavoriteMemoList } from "../../../Hook/VideoDetail/VideoMemo/useFavoriteMemoList";
import { FavoriteVideoMemoType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoType";
import { FavoriteMemoContent } from "../VideoMemo/FavoriteMemoContent";
import LoadingBase from "../../../../Common/Component/LoadingBase";
import { FavoriteSearchKeywordCommentContent } from "./FavoriteSearchKeywordCommentContent";
import { useFavoriteSearchKeywordCommentList } from "../../../Hook/VideoDetail/VideoSearchKeywordComment/useFavoriteSearchKeywordCommentList";
import { SearchKeywordCommentType } from "../../../Type/VideoDetail/VideoSearchKeywordComment/SearchKeywordCommentType";
import Loading from "../../../../Common/Component/Loading";


const Parent = styled.div`
  width: 100%;
  height: 90%;
  box-sizing: border-box;
  padding-left: 19px;
  padding-top: 19px;
  padding-right: 19px;
  color:white;
`;

const LoadingParent = styled(Parent)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CommentListAreaDiv = styled.div`
  width: 99%;
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
            <LoadingParent>
                <Loading />
            </LoadingParent>
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