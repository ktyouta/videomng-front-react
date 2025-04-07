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
  height: 90%;
  box-sizing: border-box;
  padding-left: 2%;
  color:white;
  padding-top: 1%;
`;

const CommentListAreaDiv = styled.div`
  width: 97%;
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding-left: 1%;
  padding-right: 1%;
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

                                const key = e.id;
                                return (
                                    <FavoriteCommentContent
                                        favoriteVideoComment={e}
                                        videoId={props.videoId}
                                        key={key}
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