import { HiOutlineInbox } from "react-icons/hi";
import styled from "styled-components";
import Loading from "../../../../../../components/Loading";
import { ModalPortal } from "../../../../../../components/ModalPortal";
import { useFavoriteBlockCommentList } from "../../../../hooks/videodetail/videocomment/videoblockcomment/useFavoriteBlockCommentList";
import { YouTubeDataApiCommentDetailItemType } from "../../../../types/videodetail/videocomment/YouTubeDataApiCommentDetailItemType";
import { FavoriteBlockCommentContent } from "./FavoriteBlockCommentContent";


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

export function FavoriteBlockComment(props: propsType) {

  console.log("FavoriteBlockComment render");

  const {
    isLoading,
    errMessage,
    blockCommentData, } = useFavoriteBlockCommentList();

  return (
    <ModalPortal
      isOpen={props.isOpen}
      modalWidth={props.isMobile ? "93%" : undefined}
      containerStyle={{
        height: "90%"
      }}
      isCloseOuter={true}
      close={props.close}
      title="非表示コメント"
      titleIcon={HiOutlineInbox}
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
                blockCommentData && blockCommentData.items.length > 0 ?
                  <CommentListAreaDiv>
                    {
                      blockCommentData.items.map((e: YouTubeDataApiCommentDetailItemType) => {

                        const commentId = e.id;

                        return (
                          <FavoriteBlockCommentContent
                            commentDetailItem={e}
                            key={commentId}
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
