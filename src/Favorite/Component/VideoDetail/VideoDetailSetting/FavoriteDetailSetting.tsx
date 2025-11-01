import styled from "styled-components";
import { useFavoriteDetailSetting } from "../../../Hook/VideoDetail/VideoDetailSetting/useFavoriteDetailSetting";
import { EDIT_MODE } from "../../../Const/FavoriteConst";
import { FavoriteDetailSettingView } from "./FavoriteDetailSettingView";
import { FavoriteDetailSettingEdit } from "./FavoriteDetailSettingEdit";


const Parent = styled.div`
  box-sizing:border-box;
  min-height: 502px;
  background-color: #181a1e;
  border-radius: 1%;
  border: solid 1px;
  padding: 18px;
  display:flex;
  flex-direction: column;
`;


export function FavoriteDetailSetting() {

    console.log("FavoriteDetailSetting render");

    const {
        editMode,
        changeEdit,
        changeView,
    } = useFavoriteDetailSetting();

    return (
        <Parent>
            {
                // 閲覧
                editMode === EDIT_MODE.VIEW &&
                <FavoriteDetailSettingView
                    changeEdit={changeEdit}
                />
            }
            {
                // 編集
                editMode === EDIT_MODE.EDIT &&
                <FavoriteDetailSettingEdit
                    changeView={changeView}
                />
            }
        </Parent>
    );
}