import styled from "styled-components";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import { format } from "date-fns";
import { useFavoriteMemoContent } from "../Hook/useFavoriteMemoContent";
import React from "react";
import { FavoriteMemoEditInput } from "./FavoriteMemoEditInput";
import { FavoriteMemoEditIconArea } from "./FavoriteMemoEditIconArea";
import { FavoriteMemoDeleteIconArea } from "./FavoriteMemoDeleteIconArea";
import { FavoriteVideoCommentThreadItemType } from "../Type/FavoriteVideoCommentThreadItemType";
import { useFavoriteReplyCommentList } from "../Hook/useFavoriteReplyCommentList";
import { FavoriteReplyCommentContent } from "./FavoriteReplyCommentContent";
import { FavoriteVideoCommentThreadReplyCommentType } from "../Type/FavoriteVideoCommentThreadReplyCommentType";


const IconDiv = styled.div`
    box-sizing: border-box;
    width:8%;
    display:flex;
    align-items: center;
    justify-content: end;
    padding-right: 1%;
    position:relative;
`;

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
    videoId: string,
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
                        props.replyCommentList.map((e) => {
                            return (
                                <FavoriteReplyCommentContent
                                    commentThreadReply={e}
                                />
                            )
                        })
                    }
                </ReplyDiv>
            }
        </React.Fragment>
    );
}