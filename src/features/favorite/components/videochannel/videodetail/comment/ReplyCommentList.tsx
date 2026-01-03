import React from "react";
import styled from "styled-components";
import { useReplyCommentList } from "../../../../hooks/videochannel/videodetail/comment/useReplyCommentList";
import { VideoCommentThreadReplyCommentType } from "../../../../types/videochannel/videodetail/comment/VideoCommentThreadReplyCommentType";
import { ReplyCommentContent } from "./ReplyCommentContent";


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
    color: #2563eb;
    &:hover {
        text-decoration: underline;
    }
`;


type propsType = {
    replyCommentList: VideoCommentThreadReplyCommentType[],
}

export function ReplyCommentList(props: propsType) {

    console.log("ReplyCommentList render");

    const {
        isDisplayReply,
        openReply,
        closeReply } = useReplyCommentList();

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
                        props.replyCommentList.map((e: VideoCommentThreadReplyCommentType) => {

                            const commentId = e.id

                            return (
                                <ReplyCommentContent
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