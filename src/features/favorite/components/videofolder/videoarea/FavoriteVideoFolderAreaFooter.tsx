import styled from "styled-components";
import { Pagenation } from "../../../../../components/Pagenation";
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
            {
                totalPage > 1 &&
                <Pagenation
                    changePage={changePage}
                    totalPage={totalPage}
                    selectedPage={selectPage}
                />
            }
        </Parent>
    );
}