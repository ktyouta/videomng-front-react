import React from "react";
import styled from "styled-components";
import { FavoriteMemoEditIconArea } from "./FavoriteMemoEditIconArea";
import { FavoriteMemoDeleteIconArea } from "./FavoriteMemoDeleteIconArea";
import { FavoriteVideoMemoType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoType";
import { format } from "date-fns";
import { useFavoriteMemoContentViewDeleteArea } from "../../../Hook/VideoDetail/VideoMemo/useFavoriteMemoContentViewDeleteArea";
import { ModalPortalConfirm } from "../../../../Common/Component/ModalPortalConfirm";


type propsType = {
    data: FavoriteVideoMemoType,
}

export function FavoriteMemoContentViewDeleteArea(props: propsType) {

    console.log("FavoriteMemoContentViewDeleteArea render");

    const {
        isOpenModal,
        closeModal,
        deleteMemo,
        executeDelete } = useFavoriteMemoContentViewDeleteArea({ ...props });

    return (
        <React.Fragment>
            <FavoriteMemoDeleteIconArea
                deleteMemo={deleteMemo}
            />
            <ModalPortalConfirm
                isOpenModal={isOpenModal}
                closeModal={closeModal}
                titleMessage={`メモを削除しますか？`}
                clickOk={executeDelete}
            />
        </React.Fragment>
    );
}