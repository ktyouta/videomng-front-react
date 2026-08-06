import { IoNewspaperOutline } from "react-icons/io5";
import styled from "styled-components";
import Loading from "../../../../../../components/Loading";
import { ModalBody, ModalHeader } from "../../../../../../components/ModalLayout";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { useFavoriteFavoriteCommentList } from "../../../../hooks/videodetail/videocomment/videofavoritecomment/useFavoriteFavoriteCommentList";
import { YouTubeDataApiCommentDetailItemType } from "../../../../types/videodetail/videocomment/YouTubeDataApiCommentDetailItemType";
import { FavoriteFavoriteCommentContent } from "./FavoriteFavoriteCommentContent";


const Parent = styled.div`
  box-sizing:border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  font-size: 12px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 13px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 16px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 16px;
  }
`;

const CommentListDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-left: 2%;
  color:white;
`;

const CommentLoadingDiv = styled(CommentListDiv)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`;

const CommentListAreaDiv = styled.div`
  width: 97%;
  box-sizing: border-box;
  padding-left: 1%;
  padding-right: 1%;
`;

export function FavoriteFavoriteComment() {

  console.log("FavoriteFavoriteComment render");

  const {
    isLoading,
    errMessage,
    favoriteCommentData, } = useFavoriteFavoriteCommentList();

  return (
    <Parent>
      {/* お気に入りコメントヘッダ */}
      <ModalHeader icon={IoNewspaperOutline}>
        お気に入りコメント
      </ModalHeader>
      {/* お気に入りコメントリスト */}
      <ModalBody>
        {
          isLoading
            ?
            <CommentLoadingDiv>
              <Loading />
            </CommentLoadingDiv>
            :
            errMessage
              ?
              <CommentListDiv>
                {errMessage}
              </CommentListDiv>
              :
              <CommentListDiv>
                {
                  favoriteCommentData && favoriteCommentData.items.length > 0 ?
                    <CommentListAreaDiv>
                      {
                        favoriteCommentData.items.map((e: YouTubeDataApiCommentDetailItemType) => {

                          const commentId = e.id

                          return (
                            <FavoriteFavoriteCommentContent
                              commentDetailItem={e}
                              key={`${commentId}-favoritecommentid`}
                            />
                          )
                        })
                      }
                    </CommentListAreaDiv>
                    :
                    `コメントが存在しません。`
                }
              </CommentListDiv>
        }
      </ModalBody>
    </Parent>
  );
}