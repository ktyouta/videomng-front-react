import React from "react";
import styled from "styled-components";
import { FavoriteMemoEditIconArea } from "./FavoriteMemoEditIconArea";
import { FavoriteMemoDeleteIconArea } from "./FavoriteMemoDeleteIconArea";
import { FavoriteVideoMemoType } from "../../../types/videodetail/videomemo/FavoriteVideoMemoType";
import { format } from "date-fns";
import { useFavoriteMemoContentViewDeleteArea } from "../../../hooks/videodetail/videomemo/useFavoriteMemoContentViewDeleteArea";
import { ModalPortalConfirm } from "../../../../../components/ModalPortalConfirm";


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