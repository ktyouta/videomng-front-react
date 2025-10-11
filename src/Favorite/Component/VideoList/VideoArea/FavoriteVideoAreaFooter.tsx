import styled from "styled-components";
import { Pagenatetion } from "../../../../Common/Component/Pagenation";
import { useFavoriteVideoAreaFooter } from "../../../Hook/VideoList/VideoArea/useFavoriteVideoAreaFooter";

const Parent = styled.div`
  display:flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 6%;
  color: rgb(158, 158, 158);
  margin-top: 13px;
`;

export function FavoriteVideoAreaFooter() {

    const { changePage } = useFavoriteVideoAreaFooter();

    return (
        <Parent>
            <Pagenatetion
                changePage={changePage}
                totalPage={0}
            />
        </Parent>
    );
}