import React from "react";
import styled from "styled-components";
import { useHomeReplyCommentList } from "../../../hooks/videodetail/videocomment/useHomeReplyCommentList";
import { HomeVideoCommentThreadReplyCommentType } from "../../../types/videodetail/videocomment/HomeVideoCommentThreadReplyCommentType";
import { HomeReplyCommentContent } from "./HomeReplyCommentContent";


const DisplayReplyDiv = styled.div`
    cursor:pointer;
    box-sizing: border-box;
    margin-top: 2%;
    margin-bottom: 6px;
`;

const ReplyDiv = styled.div`
    box-sizing: border-box;
    margin-top: 2%;
    padding-left: 3%;
`;

const SwitchingSpan = styled.span`
    cursor:pointer;
    color: #2EA3F2;
    &:hover {
        text-decoration: underline;
    }
`;


type propsType = {
    replyCommentList: HomeVideoCommentThreadReplyCommentType[],
}

export function HomeReplyCommentList(props: propsType) {

    console.log("HomeReplyCommentList render");

    const {
        isDisplayReply,
        openReply,
        closeReply } = useHomeReplyCommentList();

    return (
        <React.Fragment>
            <DisplayReplyDiv>
                {
                    isDisplayReply ?
                        <SwitchingSpan
                            onClick={closeReply}
                        >
                            返信を閉じる
                        </SwitchingSpan>
                        :
                        <SwitchingSpan
                            onClick={openReply}
                        >
                            返信を表示
                        </SwitchingSpan>
                }
            </DisplayReplyDiv>
            {
                isDisplayReply &&
                <ReplyDiv>
                    {
                        props.replyCommentList.map((e: HomeVideoCommentThreadReplyCommentType) => {

                            const commentId = e.id

                            return (
                                <HomeReplyCommentContent
                                    commentThreadReplySnippet={e.snippet}
                                    key={commentId}
                                />
                            )
                        })
                    }
                </ReplyDiv>
            }
        </React.Fragment>
    );
}