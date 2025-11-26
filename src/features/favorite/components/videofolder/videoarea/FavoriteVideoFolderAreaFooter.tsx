import styled from "styled-components";
import { Pagenation } from "../../../../../components/Pagenation";
import { useFavoriteVideoAreaFooter } from "../../../hooks/videolist/videoarea/useFavoriteVideoAreaFooter";
import { useFavoriteVideoFolderAreaFooter } from "../../../hooks/videofolder/videoarea/useFavoriteVideoFolderAreaFooter";

const Parent = styled.div`
  display:flex;
  align-items: center;
  box-sizing: border-box;
  margin-top: 44px;
  justify-content: center;
`;

export function FavoriteVideoFolderAreaFooter() {

    const {
        changePage,
        totalPage,
        selectPage } = useFavoriteVideoFolderAreaFooter();

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