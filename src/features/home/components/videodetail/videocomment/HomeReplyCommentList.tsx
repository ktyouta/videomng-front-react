import styled from "styled-components";
import React from "react";
import { HomeVideoCommentThreadReplyCommentType } from "../../../types/videodetail/videocomment/HomeVideoCommentThreadReplyCommentType";
import { useHomeReplyCommentList } from "../../../hooks/videodetail/videocomment/useHomeReplyCommentList";
import { HomeReplyCommentContent } from "./HomeReplyCommentContent";


const DisplayReplyDiv = styled.div`
    cursor:pointer;
    box-sizing: border-box;
    margin-top: 2%;
`;

const ReplyDiv = styled.div`
    box-sizing: border-box;
    margin-top: 2%;
    padding-left: 3%;
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
                        <span
                            onClick={closeReply}
                        >
                            返信を閉じる
                        </span>
                        :
                        <span
                            onClick={openReply}
                        >
                            返信を表示
                        </span>
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