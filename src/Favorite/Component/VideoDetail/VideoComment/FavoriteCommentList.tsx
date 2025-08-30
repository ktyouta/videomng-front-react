import styled from "styled-components";
import { useFavoriteMemoList } from "../../../Hook/VideoDetail/VideoMemo/useFavoriteMemoList";
import { FavoriteVideoMemoType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoType";
import { FavoriteMemoContent } from "../VideoMemo/FavoriteMemoContent";
import LoadingBase from "../../../../Common/Component/LoadingBase";
import { useFavoriteCommentList } from "../../../Hook/VideoDetail/VideoComment/useFavoriteCommentList";
import { FavoriteCommentContent } from "./FavoriteCommentContent";
import Loading from "../../../../Common/Component/Loading";
import { FavoriteVideoCommentThreadItemType } from "../../../Type/VideoDetail/VideoComment/FavoriteVideoCommentThreadItemType";


const Parent = styled.div`
  width: 100%;
  height: 90%;
  box-sizing: border-box;
  color:white;
  padding-top: 1%;
`;

const LoadingParent = styled(Parent)`
    display: flex;
    align-items: center;
    justify-content: center;
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


export function FavoriteCommentList() {

    console.log("FavoriteCommentList render");

    const {
        isLoading,
        errMessage,
        favoriteVideoCommentList, } = useFavoriteCommentList();

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

    if (!favoriteVideoCommentList) {
        return (
            <LoadingParent>
                <Loading />
            </LoadingParent>
        );
    }

    return (
        <Parent>
            {
                favoriteVideoCommentList.length > 0 ?
                    <CommentListAreaDiv>
                        {
                            favoriteVideoCommentList.map((e: FavoriteVideoCommentThreadItemType) => {

                                const key = e.id;
                                return (
                                    <FavoriteCommentContent
                                        favoriteVideoComment={e}
                                        key={`${key}-commentid`}
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