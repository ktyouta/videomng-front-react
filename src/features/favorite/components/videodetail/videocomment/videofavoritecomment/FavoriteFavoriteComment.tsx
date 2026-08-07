import { IoNewspaperOutline } from "react-icons/io5";
import styled from "styled-components";
import Loading from "../../../../../../components/Loading";
import { ModalPortal } from "../../../../../../components/ModalPortal";
import { useFavoriteFavoriteCommentList } from "../../../../hooks/videodetail/videocomment/videofavoritecomment/useFavoriteFavoriteCommentList";
import { YouTubeDataApiCommentDetailItemType } from "../../../../types/videodetail/videocomment/YouTubeDataApiCommentDetailItemType";
import { FavoriteFavoriteCommentContent } from "./FavoriteFavoriteCommentContent";


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

type propsType = {
  isOpen: boolean;
  close: () => void;
  isMobile: boolean;
}

export function FavoriteFavoriteComment(props: propsType) {

  console.log("FavoriteFavoriteComment render");

  const {
    isLoading,
    errMessage,
    favoriteCommentData, } = useFavoriteFavoriteCommentList();

  return (
    <ModalPortal
      isOpen={props.isOpen}
      modalWidth={props.isMobile ? "93%" : undefined}
      containerStyle={{
        height: "90%"
      }}
      isCloseOuter={true}
      close={props.close}
      title="お気に入りコメント"
      titleIcon={IoNewspaperOutline}
    >
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
    </ModalPortal>
  );
}
