import React from "react";
import styled from "styled-components";
import { FavoriteMemoEditIconArea } from "./FavoriteMemoEditIconArea";
import { FavoriteMemoDeleteIconArea } from "./FavoriteMemoDeleteIconArea";
import { ConfirmModalComponent } from "../../../../Common/Component/ConfirmModalComponent";
import { FavoriteVideoMemoType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoType";
import { format } from "date-fns";
import { FavoriteMemoContentViewDeleteArea } from "./FavoriteMemoContentViewDeleteArea";

const MemoDiv = styled.div`
    box-sizing: border-box;
    margin-bottom: 8px;
`;

const LowerDiv = styled.div`
    box-sizing: border-box;
    display:flex;
    text-align: left;
    overflow-wrap: break-word;
    align-items: center;
`;

const MetaDiv = styled.div`
    font-size:13px;
    flex: 1;
    display: flex;
    align-items: center;
`;

type propsType = {
    data: FavoriteVideoMemoType,
    openEdit: () => void,
}

export function FavoriteMemoContentView(props: propsType) {

    console.log("FavoriteMemoContentView render");

    const memoData = props.data;
    const memo = memoData.videoMemo;
    const updateDate = format(new Date(memoData.updateDate), "yyyy/MM/dd  HH:mm");

    return (
        <React.Fragment>
            {/* 閲覧 */}
            <MemoDiv>
                {memo}
            </MemoDiv>
            <LowerDiv>
                <MetaDiv>
                    {updateDate}
                </MetaDiv>
                {/* 編集 */}
                <FavoriteMemoEditIconArea
                    openEdit={props.openEdit}
                />
                {/* 削除 */}
                <FavoriteMemoContentViewDeleteArea
                    data={props.data}
                />
            </LowerDiv>
        </React.Fragment>
    );
}