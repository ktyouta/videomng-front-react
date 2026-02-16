import styled from "styled-components";
import { useFavoriteVideoList } from "../../hooks/videolist/useFavoriteVideoList";
import { FavoriteVideoDisplayVideoListProvider } from "./FavoriteVideoDisplayVideoListProvider";
import { FavoriteSearchArea } from "./searcharea/FavoriteSearchArea";
import { FavoriteVideoArea } from "./videoarea/FavoriteVideoArea";


const Parent = styled.div`
  width: 100%;
  box-sizing:border-box;
  padding-top:1%;
`;


export function FavoriteVideoList() {

    console.log("FavoriteVideoList render");

    useFavoriteVideoList();

    return (
        <Parent>
            <FavoriteVideoDisplayVideoListProvider>
                {/* 検索条件エリア */}
                <FavoriteSearchArea />
                {/* 動画表示エリア */}
                <FavoriteVideoArea />
            </FavoriteVideoDisplayVideoListProvider>
        </Parent>
    );
}