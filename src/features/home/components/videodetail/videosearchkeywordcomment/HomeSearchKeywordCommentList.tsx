import styled from "styled-components";
import LoadingBase from "../../../../../components/LoadingBase";
import { useHomeSearchKeywordCommentList } from "../../../hooks/videodetail/videosearchkeywordcomment/useHomeSearchKeywordCommentList";
import { SearchKeywordCommentType } from "../../../types/videodetail/videosearchkeywordcomment/SearchKeywordCommentType";
import Loading from "../../../../../components/Loading";
import { HomeSearchKeywordCommentContent } from "./HomeSearchKeywordCommentContent";


const Parent = styled.div`
  width: 100%;
  flex: 1;
  box-sizing: border-box;
  color:white;
  display: flex;
  flex-direction: column;
  min-height: 0;
  padding-top: 20px;
`;

const LoadingParent = styled(Parent)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CommentListAreaDiv = styled.div`
  width: 99%;
  height: 95%;
  overflow: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 0 20px 0 9px;
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