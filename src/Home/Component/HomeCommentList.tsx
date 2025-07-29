import styled from "styled-components";
import LoadingBase from "../../Common/Component/LoadingBase";
import { useHomeCommentList } from "../Hook/useHomeCommentList";
import { HomeVideoCommentThreadItemType } from "../Type/HomeVideoCommentThreadItemType";
import { HomeCommentContent } from "./HomeCommentContent";
import Loading from "../../Common/Component/Loading";


const Parent = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-left: 2%;
  padding-top: 4%;
  color:white;
  position: relative;
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


export function HomeCommentList() {

    console.log("HomeCommentList render");

    const {
        isLoading,
        errMessage,
        homeVideoCommentList, } = useHomeCommentList();

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
                homeVideoCommentList && homeVideoCommentList.length > 0 ?
                    <CommentListAreaDiv>
                        {
                            homeVideoCommentList.map((e: HomeVideoCommentThreadItemType) => {

                                const commentId = e.snippet.topLevelComment.id;

                                return (
                                    <HomeCommentContent
                                        homeVideoComment={e}
                                        key={commentId}
                                    />
                                )
                            })
                        }
                    </CommentListAreaDiv>
                    :
                    `コメントが存在しません。`
            }
        </Parent>
    );
}