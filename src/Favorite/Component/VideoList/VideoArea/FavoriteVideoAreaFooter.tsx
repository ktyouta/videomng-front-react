import styled from "styled-components";
import { Pagenatetion } from "../../../../Common/Component/Pagenation";
import { useFavoriteVideoAreaFooter } from "../../../Hook/VideoList/VideoArea/useFavoriteVideoAreaFooter";

const Parent = styled.div`
  display:flex;
  align-items: center;
  box-sizing: border-box;
  margin-top: 32px;
  justify-content: center;
`;

export function FavoriteVideoAreaFooter() {

    const {
        changePage,
        totalPage } = useFavoriteVideoAreaFooter();

    return (
        <Parent>
            <Pagenatetion
                changePage={changePage}
                totalPage={totalPage}
            />
        </Parent>
    );
}