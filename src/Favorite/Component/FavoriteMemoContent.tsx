import styled from "styled-components";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import { format } from "date-fns";
import { FaRegTrashAlt } from "react-icons/fa";
import { IconComponent } from "../../Common/Component/IconComponent";
import { useFavoriteMemoContent } from "../Hook/useFavoriteMemoContent";


const Parent = styled.div`
    height: auto;
    box-sizing: border-box;
    border-bottom: solid 1px;
    margin-bottom: 5%;
`;

const MemoDiv = styled.div`
    box-sizing: border-box;
    margin-bottom: 8px;
`;

const LowerDiv = styled.div`
    box-sizing: border-box;
    display:flex;
    text-align: left;
    overflow-wrap: break-word;
`;

const IconDiv = styled.div`
    box-sizing: border-box;
    width:5%;
    display:flex;
    align-items: center;
    justify-content: end;
    padding-right: 1%;
`;

const MetaDiv = styled.div`
    font-size:13px;
    width:95%;
`;

type propsType = {
    favoriteVideoMemo: FavoriteVideoMemoType,
    videoId: string,
}

export function FavoriteMemoContent(props: propsType) {

    console.log("FavoriteMemoContent render");

    const { deleteMemo } = useFavoriteMemoContent();

    const data = props.favoriteVideoMemo;
    const memo = data.videoMemo;
    const memoSeq = data.videoMemoSeq;
    const updateDate = format(new Date(data.updateDate), "yyyy/MM/dd  HH:mm");

    return (
        <Parent>
            <MemoDiv>
                {memo}
            </MemoDiv>
            <LowerDiv>
                <MetaDiv>
                    {updateDate}
                </MetaDiv>
                <IconDiv>
                    <IconComponent
                        icon={FaRegTrashAlt}
                        onclick={() => { deleteMemo(props.videoId, memoSeq) }}
                        size="55%"
                        style={{ color: "white" }}
                    />
                </IconDiv>
            </LowerDiv>
        </Parent>
    );
}