import { HiOutlineInbox } from "react-icons/hi";
import styled from "styled-components";
import Loading from "../../../../../../components/Loading";
import { ModalBody, ModalHeader } from "../../../../../../components/ModalLayout";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { useFavoriteBlockCommentList } from "../../../../hooks/videodetail/videocomment/videoblockcomment/useFavoriteBlockCommentList";
import { YouTubeDataApiCommentDetailItemType } from "../../../../types/videodetail/videocomment/YouTubeDataApiCommentDetailItemType";
import { FavoriteBlockCommentContent } from "./FavoriteBlockCommentContent";


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

export function FavoriteBlockComment() {

  console.log("FavoriteBlockComment render");

  const {
    isLoading,
    errMessage,
    blockCommentData, } = useFavoriteBlockCommentList();

  return (
    <Parent>
      {/* ブロックコメントヘッダ */}
      <ModalHeader icon={HiOutlineInbox}>
        非表示コメント
      </ModalHeader>
      {/* ブロックコメントリスト */}
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
      </ModalBody>
    </Parent>
  );
}