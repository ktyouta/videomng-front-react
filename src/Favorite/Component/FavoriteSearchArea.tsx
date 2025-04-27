import styled from "styled-components";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import ModalComponent from "../../Common/Component/ModalComponent";
import { OverlayDiv } from "../../Common/StyledComponent/OverlayDiv";
import { FavoriteSearchCondition } from "./FavoriteSearchCondition";
import { useFavoriteSearchArea } from "../Hook/useFavoriteSearchArea";
import TagButtonComponent from "../../Common/Component/TagButtonComponent";

const Parent = styled.div`
  width: 100%;
  height: 10%;
  display:flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-right: 13%;
  padding-left: 9%;
`;

const SpaceDiv = styled.div`
    flex:1;
`;

/**
 * 検索条件エリア
 */
export function FavoriteSearchArea() {

  console.log("FavoriteSearchArea render");

  const {
    isOpenFilterModal,
    openFilterModal,
    closeFilterModal,
    selectedFavoriteVideoTag, } = useFavoriteSearchArea();

  return (
    <Parent>
      {
        selectedFavoriteVideoTag &&
        <TagButtonComponent
          title={selectedFavoriteVideoTag}
          btnStyle={{
            marginRight: "15px"
          }}
        />
      }
      <SpaceDiv />
      <ButtonComponent
        styleTypeNumber="BASE"
        title={"条件を指定"}
        onclick={openFilterModal}
        style={{
          "fontSize": "0.9rem",
          "height": "41px",
          "width": "13%",
          "background": "#29323c",
          "color": "white",
          "borderRadius": "5",
        }}
      />
      {
        // 検索条件指定モーダル
        isOpenFilterModal &&
        <ModalComponent
          modalIsOpen={isOpenFilterModal}
          closeModal={closeFilterModal}
          style={{
            backgroundColor: "#181a1e",
            borderRadius: "1%",
            border: "solid 1px",
            color: "white"
          }}
          width="32%"
          height="50%"
          positionTop="22%"
          positionLeft="33%"
        >
          <FavoriteSearchCondition
            close={closeFilterModal}
          />
        </ModalComponent>
      }
      {
        isOpenFilterModal &&
        <OverlayDiv />
      }
    </Parent>
  );
}