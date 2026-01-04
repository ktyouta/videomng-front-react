import React from "react";
import { GoTriangleDown, GoTriangleRight } from "react-icons/go";
import styled from "styled-components";
import { IconComponent } from "../../../../../../components/IconComponent";
import { ModalPortalConfirm } from "../../../../../../components/ModalPortalConfirm";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { useFavoriteDeleteFolderConfirmModal } from "../../../../hooks/videofolder/searcharea/deletefolder/useFavoriteDeleteFolderConfirmModal";
import { FolderShareVideosResponseDataType } from "../../../../types/videofolder/searcharea/deletefolder/FolderShareVideosResponseDataType";


const MessageSpan = styled.span`
  color: red;
  display: inline-block;
  font-weight: bold;
  margin-top: 23px;
  margin-bottom: 7px;
`;

const WarnMessageAreaDiv = styled.div`
  width: 100%;
  font-size: 12px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 12px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 14px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 14px;
  }

`;

const VideoListTitleDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-top: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const OpenTagIconDiv = styled.div`
  width: 22px;
  height: 22px;
`;

const VideoListAreaDiv = styled.div`
  margin-top: 10px;
  padding: 12px 14px;
  border-left: 3px solid #f5a623;
  background-color: #fff7ed;
  display: flex;
  flex-direction: column;
  gap: 14px;
  border-radius: 4px;
`;

const VideoInfoAreaDiv = styled.div``;

const VideoTitleDiv = styled.div`
  font-weight: 600;
  color: #222;
`;

const FolderInfoDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

const FolderTitleAreaDiv = styled.div`
  padding: 2px 8px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FolderTitleDiv = styled.div`
  background-color: #eef2f7;
  border-radius: 2px;
  padding: 3px 10px;
`;

const FinalWarnTextSpan = styled.span`
  margin-top: 16px;
  font-weight: 600;
`;


type propsType = {
  isOpenModal: boolean,
  closeConfirmModal: () => void,
  execute: () => void,
}

export function FavoriteDeleteFolderConfirmModal(props: propsType) {

  console.log("FavoriteDeleteFolderConfirmModal render");

  const {
    data,
    isLoading,
    isOpen,
    open,
    close } = useFavoriteDeleteFolderConfirmModal({ ...props });

  return (
    // フォルダ削除最終確認モーダル
    <ModalPortalConfirm
      isOpenModal={props.isOpenModal}
      closeModal={props.closeConfirmModal}
      style={{
        minHeight: "30%"
      }}
      titleMessage={
        !isLoading &&
        <WarnMessageAreaDiv>
          「フォルダ内の動画をお気に入りから削除する」が有効です。<br />
          このフォルダを削除すると、お気に入り一覧からも動画が削除されます。
          {
            data && data.length > 0 &&
            <React.Fragment>
              <br />
              <MessageSpan>
                ※別のフォルダにも登録されている動画が含まれています。
              </MessageSpan>
              <VideoListTitleDiv>
                <OpenTagIconDiv>
                  <IconComponent
                    icon={isOpen ? GoTriangleDown : GoTriangleRight}
                    size="100%"
                    onclick={isOpen ? close : open}
                  />
                </OpenTagIconDiv>
                <span
                  onClick={isOpen ? close : open}
                >
                  影響を受ける動画を確認する
                </span>
              </VideoListTitleDiv>
              {
                isOpen &&
                <VideoListAreaDiv>
                  {
                    data.map((e: FolderShareVideosResponseDataType) => {

                      const folder = e.folder;

                      return (
                        <VideoInfoAreaDiv
                          key={e.videoId}
                        >
                          <VideoTitleDiv>
                            {e.videoTitle}
                          </VideoTitleDiv>
                          <FolderInfoDiv>
                            登録フォルダ：
                            {
                              folder && folder.length > 0 &&
                              <FolderTitleAreaDiv>
                                {
                                  folder.map((e1) => {
                                    return (
                                      <FolderTitleDiv>
                                        {e1.folderName}
                                      </FolderTitleDiv>
                                    )
                                  })
                                }
                              </FolderTitleAreaDiv>
                            }
                          </FolderInfoDiv>
                        </VideoInfoAreaDiv>
                      )
                    })
                  }
                </VideoListAreaDiv>
              }
            </React.Fragment>
          }
          <br />
          <FinalWarnTextSpan>
            削除すると元に戻せません。削除してもよろしいですか？
          </FinalWarnTextSpan>
        </WarnMessageAreaDiv>
      }
      clickOk={props.execute}
    />
  );
}