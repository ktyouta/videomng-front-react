import styled from "styled-components";
import TagButtonComponent from "../../../../../components/TagButtonComponent";
import { tagType } from "../../../../../components/TagsComponent";
import { MEDIA } from "../../../../../consts/MediaConst";
import { useFavoriteTagEditAssignedList } from "../../../hooks/videodetail/videotag/useFavoriteTagEditAssignedList";
import { FavoriteAddTagModal } from "./addtag/FavoriteAddTagModal";


const Parent = styled.div`
  width: 100%;
  box-sizing: border-box;
  color:white;
`;

const TagEditAreaDiv = styled.div`
    border-bottom: 1px solid;
    margin-bottom: 15px;
`;

const TagListTitleDiv = styled.div`
    box-sizing: border-box;
    padding-left: 1%;
    font-weight: bold;
    display: flex;
    align-items: center;
    font-size: 14px;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
        font-size: 17px;
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
        font-size: 17px;
    }

    @media (min-width: ${MEDIA.PC}) {
        font-size: 17px;
    }
`;

const SettingTagAreaDiv = styled.div`
    display: flex;
    align-items: center;
`;

const TagListAreaDiv = styled.div`
    flex:1;
    overflow: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    padding: 2% 1% 1% 1%;
`;

const NoTagListTitleDiv = styled.div`
    flex:1;
    margin-top: 2%;
    margin-left: 1%;
    margin-bottom: 30px;
    font-size: 12px;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
        font-size: 15px;
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
        font-size: 15px;
    }

    @media (min-width: ${MEDIA.PC}) {
        font-size: 15px;
    }
`;


export function FavoriteTagEditAssignedList() {

    console.log("FavoriteTagEditAssignedList render");

    const {
        deleteTag,
        favoriteVideoTagEditList } = useFavoriteTagEditAssignedList();

    return (
        <Parent>
            <TagEditAreaDiv>
                <TagListTitleDiv>
                    設定されているタグ
                </TagListTitleDiv>
                {
                    favoriteVideoTagEditList &&
                    <SettingTagAreaDiv>
                        {
                            favoriteVideoTagEditList.length > 0 ?
                                <TagListAreaDiv>
                                    {
                                        favoriteVideoTagEditList.map((e: tagType, index: number) => {

                                            const tagKey = e.label;

                                            return (
                                                <TagButtonComponent
                                                    title={e.label}
                                                    btnStyle={{
                                                        marginRight: "15px",
                                                        marginBottom: "10px"
                                                    }}
                                                    isDispCross={true}
                                                    onclick={() => {
                                                        deleteTag(index);
                                                    }}
                                                    key={`${tagKey}-tagedit`}
                                                    bgColor={e.bgColor}
                                                />
                                            )
                                        })
                                    }
                                </TagListAreaDiv>
                                :
                                <NoTagListTitleDiv>
                                    タグが設定されていません。<br />
                                    「タグを入力して追加」または「既存タグ」から設定可能です。
                                </NoTagListTitleDiv>
                        }
                        <FavoriteAddTagModal />
                    </SettingTagAreaDiv>
                }
            </TagEditAreaDiv>
        </Parent>
    );
}