import styled from "styled-components";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import { IconComponent } from "../../Common/Component/IconComponent";
import { FaArrowUp } from "react-icons/fa";
import { useFavoriteMemoCreateInput } from "../Hook/useFavoriteMemoCreateInput";
import { useFavoriteTagCreateInput } from "../Hook/useFavoriteTagCreateInput";
import TagsComponent, { tagType } from "../../Common/Component/TagsComponent";
import { FaPlusSquare } from 'react-icons/fa';
import { GoPlus } from "react-icons/go";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import { FaPlus } from "react-icons/fa";
import { MEDIA } from "../../Common/Const/MediaConst";

const Parent = styled.div`
    position: sticky;
    left: 0px;
    width: 100%;
    box-sizing: border-box;
    padding-left: 3%;
    display: flex;
    padding-top: 22px;
    padding-right: 4%;
    align-items: center;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
        padding-right: 2%;
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
        padding-right: 2%;
    }

    @media (min-width: ${MEDIA.PC}) {
        padding-right: 2%;
    }
`;

const TagInputAreaDiv = styled.div`
    flex: 1;
`;

const AddIconAreaDiv = styled.div`
  width: 4%;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 3%;
  color: white;
`;

const BtnDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function FavoriteTagCreateInput() {

    console.log("FavoriteTagCreateInput render");

    const {
        suggestTagList,
        addTagList,
        addTag,
        deleteTag,
        addTagEditList,
        isMobile,
    } = useFavoriteTagCreateInput();

    return (
        <Parent>
            {/* タグ入力欄 */}
            <TagInputAreaDiv>
                <TagsComponent
                    tagList={addTagList}
                    suggestions={suggestTagList}
                    addTag={addTag}
                    deleteTag={deleteTag}
                />
            </TagInputAreaDiv>
            {/* 編集リスト追加ボタン */}
            {
                isMobile
                    ?
                    <AddIconAreaDiv>
                        <IconComponent
                            icon={FaPlus}
                            onclick={addTagEditList}
                            size="20px"
                        />
                    </AddIconAreaDiv>
                    :
                    <ButtonComponent
                        styleTypeNumber="BASE"
                        title={
                            <BtnDiv>
                                <IconComponent
                                    icon={GoPlus}
                                    size="20px"
                                />
                                追加
                            </BtnDiv>
                        }
                        onclick={addTagEditList}
                        style={{
                            fontSize: "14px",
                            height: "34px",
                            width: `86px`,
                            background: "rgb(41, 50, 60)",
                            color: "white",
                            borderRadius: "8px",
                            display: "flex",
                            minWidth: `86px`,
                            marginLeft: "12px"
                        }}
                    />
            }
        </Parent>
    );
}