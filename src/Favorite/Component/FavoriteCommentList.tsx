import styled from "styled-components";
import { useFavoriteMemoList } from "../Hook/useFavoriteMemoList";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import { FavoriteMemoContent } from "./FavoriteMemoContent";
import LoadingBase from "../../Common/Component/LoadingBase";
import { useFavoriteCommentList } from "../Hook/useFavoriteCommentList";
import { FavoriteVideoCommentThreadItemType } from "../Type/FavoriteVideoCommentThreadItemType";
import { FavoriteCommentContent } from "./FavoriteCommentContent";


const Parent = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-left: 2%;
  padding-top: 4%;
  color:white;
`;

const CommentListAreaDiv = styled.div`
  width: 97%;
  height: 90%;
  overflow: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 2% 1% 1% 1%;
`;

type propsType = {
    videoId: string,
}

export function FavoriteCommentList(props: propsType) {

    console.log("FavoriteCommentList render");

    const {
        isLoading,
        errMessage,
        favoriteVideoCommentList, } = useFavoriteCommentList();

    if (isLoading) {
        return (
            <Parent>
                <LoadingBase />
            </Parent>
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
                favoriteVideoCommentList && favoriteVideoCommentList.length > 0 ?
                    <CommentListAreaDiv>
                        {
                            favoriteVideoCommentList.map((e: FavoriteVideoCommentThreadItemType) => {
                                return (
                                    <FavoriteCommentContent
                                        favoriteVideoComment={e}
                                        videoId={props.videoId}
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