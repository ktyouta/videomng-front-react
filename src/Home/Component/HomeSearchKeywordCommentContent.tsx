import styled from "styled-components";
import { HighlightTextComponent } from "../../Common/Component/HighlightTextComponent";
import { SearchKeywordCommentType } from "../Type/SearchKeywordCommentType";
import { useHomeSearchKeywordCommentContent } from "../Hook/useHomeSearchKeywordCommentContent";
import { format } from "date-fns";


const Parent = styled.div`
    height: auto;
    box-sizing: border-box;
    border-bottom: solid 1px;
    margin-bottom: 5%;
`;

const AuthorNameDiv = styled.div`
    box-sizing: border-box;
`;

const CommentDiv = styled.div`
    box-sizing: border-box;
`;

const LowerDiv = styled.div`
    box-sizing: border-box;
    display:flex;
    text-align: left;
    overflow-wrap: break-word;
`;

const MetaDiv = styled.div`
    font-size:13px;
    width:95%;
    display: flex;
    align-items: center;
`;


type propsType = {
    searchComment: SearchKeywordCommentType,
    commentId: string,
}

export function HomeSearchKeywordCommentContent(props: propsType) {

    console.log("HomeSearchKeywordCommentContent render");

    const { searchKeywordCommentKeyword } = useHomeSearchKeywordCommentContent();

    const data = props.searchComment;
    const comment = data.textOriginal;
    const authorDisplayName = data.authorDisplayName;
    const publishedDate = format(new Date(data.publishedAt), "yyyy/MM/dd  HH:mm");

    return (
        <Parent>
            <AuthorNameDiv>
                {authorDisplayName}
            </AuthorNameDiv>
            <CommentDiv>
                <HighlightTextComponent
                    message={comment}
                    keyword={searchKeywordCommentKeyword}
                    id={props.commentId}
                />
            </CommentDiv>
            <LowerDiv>
                <MetaDiv>
                    {publishedDate}
                </MetaDiv>
            </LowerDiv>
        </Parent>
    );
}