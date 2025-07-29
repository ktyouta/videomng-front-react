import styled from "styled-components";
import LoadingBase from "../../Common/Component/LoadingBase";
import { HomeSearchKeywordCommentContent } from "./HomeSearchKeywordCommentContent";
import { useHomeSearchKeywordCommentList } from "../Hook/useHomeSearchKeywordCommentList";
import { SearchKeywordCommentType } from "../Type/SearchKeywordCommentType";
import Loading from "../../Common/Component/Loading";


const Parent = styled.div`
  width: 100%;
  height: 90%;
  box-sizing: border-box;
  padding-left: 2%;
  padding-top: 2%;
  padding-right: 2%;
  color:white;
`;

const LoadingParent = styled(Parent)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CommentListAreaDiv = styled.div`
  width: 97%;
  height: 90%;
  overflow: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 2% 1% 1% 1%;
`;


export function HomeSearchKeywordCommentList() {

    console.log("HomeSearchKeywordCommentList render");

    const {
        isLoading,
        searchCommentList,
        errMessage, } = useHomeSearchKeywordCommentList();

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
                                        <HomeSearchKeywordCommentContent
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