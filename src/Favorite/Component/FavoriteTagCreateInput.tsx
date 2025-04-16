import styled from "styled-components";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import { IconComponent } from "../../Common/Component/IconComponent";
import { FaArrowUp } from "react-icons/fa";
import { useFavoriteMemoCreateInput } from "../Hook/useFavoriteMemoCreateInput";
import { useFavoriteTagCreateInput } from "../Hook/useFavoriteTagCreateInput";
import TagsComponent, { tagType } from "../../Common/Component/TagsComponent";


const TagInputAreaDiv = styled.div`
  position: sticky;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding-left: 3%;
  display:flex;
  padding-top: 17px;
  padding-right: 10%;
`;

const SearchIconAreaDiv = styled.div`
  background-color:#FF9900;
  width: 4%;
  height: 37px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 15%;
  border-bottom-right-radius: 15%;
  color:#213547;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type propsType = {
    videoId: string,
}


export function FavoriteTagCreateInput(props: propsType) {

    console.log("FavoriteTagCreateInput render");

    const {
        suggestTagList,
        addTagList,
        addTag,
        deleteTag,
    } = useFavoriteTagCreateInput();

    return (
        <TagInputAreaDiv>
            <TagsComponent
                tagList={addTagList}
                suggestions={suggestTagList}
                addTag={addTag}
                deleteTag={deleteTag}
            />
            {/* <SearchIconAreaDiv>
                <IconComponent
                    icon={FaArrowUp}
                    onclick={() => { addToMemo(props.videoId) }}
                    size="70%"
                />
            </SearchIconAreaDiv> */}
        </TagInputAreaDiv>
    );
}