import styled from "styled-components";
import { Pagenation } from "../../../../../components/Pagenation";
import { useFavoriteVideoAreaFooter } from "../../../hooks/videolist/videoarea/useFavoriteVideoAreaFooter";

const Parent = styled.div`
  display:flex;
  align-items: center;
  box-sizing: border-box;
  margin-top: 44px;
  justify-content: center;
`;

export function FavoriteVideoAreaFooter() {

    const {
        changePage,
        totalPage,
        selectPage } = useFavoriteVideoAreaFooter();

    return (
        <Parent>
            <Pagenation
                changePage={changePage}
                totalPage={totalPage}
                selectedPage={selectPage}
            />
        </Parent>
    );
}