import styled from "styled-components";
import { BackToListIcon } from "../../../../components/BackToListIcon";
import { mediaQuery, useMediaQuery } from "../../../../hooks/useMediaQuery";
import { useFavoriteVideoFolderVideoList } from "../../hooks/videofolder/useFavoriteVideoFolderVideoList";
import { FavoriteVideoFolderDisplayVideoListProvider } from "./FavoriteVideoFolderDisplayVideoListProvider";
import { FavoriteVideoFolderSearchConditionValueProvider } from "./FavoriteVideoFolderSearchConditionValueProvider";
import { FavoriteSearchArea } from "./searcharea/FavoriteSearchArea";
import { FavoriteVideoFolderVideoArea } from "./videoarea/FavoriteVideoFolderVideoArea";

// 戻る矢印の縦位置（モバイル/それ以外）
const BACK_ICON_TOP_MOBILE = "70px";
const BACK_ICON_TOP_DEFAULT = "135px";

const Parent = styled.div`
  width: 100%;
  box-sizing:border-box;
  padding-top:1%;
`;


export function FavoriteVideoFolder() {

    console.log("FavoriteVideoFolder render");

    const { back } = useFavoriteVideoFolderVideoList();

    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);

    return (
        <Parent>
            <BackToListIcon
                onClick={back}
                style={{
                    "position": "fixed",
                    "top": isMobile ? BACK_ICON_TOP_MOBILE : BACK_ICON_TOP_DEFAULT,
                    "left": "3%",
                }}
            />
            <FavoriteVideoFolderDisplayVideoListProvider>
                <FavoriteVideoFolderSearchConditionValueProvider>
                    {/* 検索条件エリア */}
                    <FavoriteSearchArea />
                    {/* 動画表示エリア */}
                    <FavoriteVideoFolderVideoArea />
                </FavoriteVideoFolderSearchConditionValueProvider>
            </FavoriteVideoFolderDisplayVideoListProvider>
        </Parent>
    );
}