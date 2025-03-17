import styled from "styled-components";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import { IconComponent } from "../../Common/Component/IconComponent";
import { FaArrowUp } from "react-icons/fa";
import { useFavoriteMemoCreateInput } from "../Hook/useFavoriteMemoCreateInput";
import { useFavoriteMemoUpdateInput } from "../Hook/useFavoriteMemoUpdateInput";
import { RxCross1 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import { FavoriteMemoUpdateIconArea } from "./FavoriteMemoUpdateIconArea";
import { FavoriteMemoCancelIconArea } from "./FavoriteMemoCancelIconArea";


const MemoInputAreaDiv = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  display:flex;
`;

const EditIconAreaDiv = styled.div`
  width: 7%;
  height: 38px;
  color:white;
  display: flex;
  align-items: center;
  justify-content: center;
  position:relative;
`;


type propsType = {
    videoId: string,
    videoMemoSeq: number,
    closeEdit: () => void,
    inputMemo: string,
}


export function FavoriteMemoEditInput(props: propsType) {

    console.log("FavoriteMemoEditInput render");

    const {
        inputMemo,
        setInputMemo,
        updateMemo,
    } = useFavoriteMemoUpdateInput({ ...props });

    return (
        <MemoInputAreaDiv>
            <BaseTextbox
                textWidth="92%"
                placeholder="メモ"
                value={inputMemo}
                onChange={setInputMemo}
                style={{
                    height: "34px",
                }}
            />
            <EditIconAreaDiv>
                {/* キャンセル */}
                <FavoriteMemoCancelIconArea
                    closeEdit={props.closeEdit}
                />
                {/* 更新 */}
                <FavoriteMemoUpdateIconArea
                    updateMemo={() => { updateMemo(props.videoId, props.videoMemoSeq); }}
                />
            </EditIconAreaDiv>
        </MemoInputAreaDiv>
    );
}