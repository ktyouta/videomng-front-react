import React from "react";
import { useFavoriteVideoDetail } from "../Hook/useFavoriteVideoDetail";
import LoadingBase from "../../Common/Component/LoadingBase";
import styled from "styled-components";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import { VideoUrlModel } from "../../Common/Model/VideoUrlModel";
import { FavoriteVideoDetailInfo } from "./FavoriteVideoDetailInfo";
import { YouTubeDataApiVideoDetailItemType } from "../Type/YouTubeDataApiVideoDetailItemType";
import { useFavoriteVideoDetailMenu } from "../Hook/useFavoriteVideoDetailMenu";
import { FavoriteVideoDetailDataType } from "../Type/FavoriteVideoDetailDataType";
import ModalComponent from "../../Common/Component/ModalComponent";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import { FavoriteMemo } from "./FavoriteMemo";
import { Z_INDEX_PARAM } from "../../Common/Const/CommonConst";
import { MENU_NO, VIDEO_DETIAL_MENU_LIST } from "../Const/FavoriteConst";
import { FavoriteComment } from "./FavoriteComment";
import { FavoriteSearchKeywordComment } from "./FavoriteSearchKeywordComment";
import ComboComponent, { comboType } from "../../Common/Component/ComboComponent";
import { FavoriteMetaInfo } from "./FavoriteMetaInfo";
import { FavoriteDetailSetting } from "./FavoriteDetailSetting";
import { FavoriteTag } from "./FavoriteTag";
import { Provider } from "jotai";


const MenuParentDiv = styled.div`
  width: 75%;
  margin-left: 2%;
  box-sizing:border-box;
  padding-top: 1%;
  padding-left: 3%;
`;

const ComboAreaDiv = styled.div`
  display:flex;
  align-items: center;
  margin-bottom: 3%;
`;

const ComboTitleSpan = styled.span`
  margin-right:2%;
  color: white;
  font-size: 18px;
`;

type propsType = {
    videoDetail: FavoriteVideoDetailDataType | undefined,
}


export function FavoriteVideoDetailMenu(props: propsType) {

    console.log("FavoriteVideoDetailMenu render");

    const {
        openMenuNo,
        setOpenMenuNo } = useFavoriteVideoDetailMenu();

    const videoDetail = props.videoDetail;

    return (
        <React.Fragment>
            <MenuParentDiv>
                <ComboAreaDiv>
                    <ComboTitleSpan>
                        メニュー：
                    </ComboTitleSpan>
                    <ComboComponent
                        combo={VIDEO_DETIAL_MENU_LIST}
                        initValue={VIDEO_DETIAL_MENU_LIST[0].value}
                        onChange={setOpenMenuNo}
                        width="50%"
                        minWidth="8%"
                        height="39px"
                        selectStyle={{
                            "backgroundColor": "rgb(24, 26, 30)",
                            "color": "white",
                        }}
                    />
                </ComboAreaDiv>
                {
                    // 動画情報
                    openMenuNo === MENU_NO.INFO &&
                    <Provider>
                        <FavoriteMetaInfo
                            videoDetail={videoDetail}
                        />
                    </Provider>
                }
                {
                    // メモ
                    openMenuNo === MENU_NO.MEMO &&
                    <Provider>
                        <FavoriteMemo />
                    </Provider>
                }
                {
                    // 公開コメント
                    openMenuNo === MENU_NO.COMMENT &&
                    <Provider>
                        <FavoriteComment />
                    </Provider>
                }
                {
                    // キーワード検索(コメント)
                    openMenuNo === MENU_NO.KEYWORD_SEARCH_COMMENT &&
                    <Provider>
                        <FavoriteSearchKeywordComment />
                    </Provider>
                }
                {
                    // 動画詳細設定
                    openMenuNo === MENU_NO.VIDEO_DETAIL_SETTING &&
                    videoDetail &&
                    <Provider>
                        <FavoriteDetailSetting
                            videoDetail={videoDetail}
                        />
                    </Provider>
                }
                {
                    // タグ
                    openMenuNo === MENU_NO.TAG &&
                    <Provider>
                        <FavoriteTag />
                    </Provider>
                }
            </MenuParentDiv>
        </React.Fragment>
    );
}