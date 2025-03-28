import styled from "styled-components";
import { IconComponent } from "../../Common/Component/IconComponent";
import { HiOutlineInbox } from 'react-icons/hi';
import { useFavoriteCommentHeader } from "../Hook/useFavoriteCommentHeader";
import ModalComponent from "../../Common/Component/ModalComponent";
import { FavoriteBlockComment } from "./FavoriteBlockComment";


//ヘッダータイトルのスタイル
const HeaderDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
  height:4%;
  justify-content: end;
`;

const BlockNavDiv = styled.div<{ isDisplay: boolean }>`
    display: ${({ isDisplay }) => (isDisplay ? "flex" : "none")};
    width: 70px;
    height: 20px;
    top: 33px;
    font-size: 10px;
    background-color: white;
    z-index: 10;
    position: absolute;
    left: -17px;
    box-sizing: border-box;
    color: black;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
`;

const BlockIconDiv = styled.div`
  width: 10%;
  box-sizing: border-box;
  position:relative;
`;

// モーダルオープン時の背景のスタイル
const OverlayDiv = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: black;
opacity: 0.9;
const ComboTitleSpan = styled.span;
`;


export function FavoriteCommentHeader() {

  console.log("FavoriteCommentHeader render");

  const {
    isOpenBlockListNav,
    openBlockListNav,
    closeBlockListNav,
    isOpenBlockListModal,
    openBlockListModal,
    closeBlockListModal } = useFavoriteCommentHeader();

  return (
    <HeaderDiv>
      <BlockIconDiv>
        <IconComponent
          icon={HiOutlineInbox}
          onclick={openBlockListModal}
          size="25%"
          style={{ color: "white" }}
          onMouseEnter={openBlockListNav}
          onMouseLeave={closeBlockListNav}
        />
        <BlockNavDiv
          isDisplay={isOpenBlockListNav}
        >
          非表示リスト
        </BlockNavDiv>
      </BlockIconDiv>
      {
        // 非表示コメントリスト
        isOpenBlockListModal &&
        <ModalComponent
          modalIsOpen={isOpenBlockListModal}
          closeModal={closeBlockListModal}
          style={{
            backgroundColor: "#181a1e",
            borderRadius: "1%",
            border: "solid 1px",
          }}
        >
          <FavoriteBlockComment
            close={closeBlockListModal}
          />
        </ModalComponent>
      }
      {
        isOpenBlockListModal &&
        <OverlayDiv />
      }
    </HeaderDiv>
  );
}