import styled from "styled-components";
import { useFavoriteReplyCommentList } from "../../../Hook/VideoDetail/VideoComment/useFavoriteReplyCommentList";
import React from "react";
import { FavoriteReplyCommentContent } from "./FavoriteReplyCommentContent";
import { FavoriteVideoCommentThreadReplyCommentType } from "../../../Type/VideoDetail/VideoComment/FavoriteVideoCommentThreadReplyCommentType";



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