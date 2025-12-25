import React from "react";
import styled from "styled-components";
import { useFavoriteReplyCommentList } from "../../../hooks/videodetail/videocomment/useFavoriteReplyCommentList";
import { FavoriteVideoCommentThreadReplyCommentType } from "../../../types/videodetail/videocomment/FavoriteVideoCommentThreadReplyCommentType";
import { FavoriteReplyCommentContent } from "./FavoriteReplyCommentContent";



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
    replyCommentList: FavoriteVideoCommentThreadReplyCommentType[],
}

export function FavoriteReplyCommentList(props: propsType) {

    console.log("FavoriteReplyCommentList render");

    const {
        isDisplayReply,
        openReply,
        closeReply } = useFavoriteReplyCommentList();

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
                        props.replyCommentList.map((e: FavoriteVideoCommentThreadReplyCommentType) => {

                            const commentId = e.id;

                            return (
                                <FavoriteReplyCommentContent
                                    commentThreadReply={e}
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