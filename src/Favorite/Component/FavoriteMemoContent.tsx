import styled from "styled-components";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import { format } from "date-fns";

const Parent = styled.div`
    height: auto;
    box-sizing: border-box;
    border-bottom: solid 1px;
    margin-bottom: 5%;
`;

const ContentDiv = styled.div`
    box-sizing: border-box;
    margin-bottom: 8px;
`;

const MetaDiv = styled.div`
    font-size:13px;
`;

type propsType = {
    favoriteVideoMemo: FavoriteVideoMemoType,
}

export function FavoriteMemoContent(props: propsType) {

    console.log("FavoriteMemoContent render");

    const data = props.favoriteVideoMemo;
    const memo = data.videoMemo;
    const updateDate = format(new Date(data.updateDate), "yyyy/MM/dd  HH:mm");

    return (
        <Parent>
            <ContentDiv>
                {memo}
            </ContentDiv>
            <MetaDiv>
                {updateDate}
            </MetaDiv>
        </Parent>
    );
}