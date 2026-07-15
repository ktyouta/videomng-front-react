import styled from "styled-components";
import Loading from "../../../../../../components/Loading";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { useFavoriteBlockCommentList } from "../../../../hooks/videodetail/videocomment/videoblockcomment/useFavoriteBlockCommentList";
import { YouTubeDataApiCommentDetailItemType } from "../../../../types/videodetail/videocomment/YouTubeDataApiCommentDetailItemType";
import { FavoriteBlockCommentContent } from "./FavoriteBlockCommentContent";


const Parent = styled.div`
  box-sizing:border-box;
  padding-top:1%;
  height:100%;
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

const HeaderDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
  height:4%;
`;

const HeaderTitleSpan = styled.div`
`;

const CommentListDiv = styled.div`
  width: 100%;
  height: 96%;
  box-sizing: border-box;
  padding-left: 2%;
  color:white;
  padding-top: 2%;
`;

const CommentLoadingDiv = styled(CommentListDiv)`
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

export function FavoriteBlockComment() {

  console.log("FavoriteBlockComment render");

  const {
    isLoading,
    errMessage,
    blockCommentData, } = useFavoriteBlockCommentList();

  return (
    <Parent>
      {/* ブロックコメントヘッダ */}
      <HeaderDiv>
        <HeaderTitleSpan>
          非表示コメント
        </HeaderTitleSpan>
      </HeaderDiv>
      {/* ブロックコメントリスト */}
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
    </Parent>
  );
}