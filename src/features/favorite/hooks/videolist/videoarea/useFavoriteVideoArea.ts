import { useAtom, useAtomValue } from "jotai";
import useQueryWrapper from "../../../../../hooks/useQueryWrapper";
import { FavoriteVideoListResponseType } from "../../../types/videolist/FavoriteVideoListResponseType";
import { errResType, resSchema } from "../../../../../hooks/useMutationWrapperBase";
import { VIDEO_MNG_PATH } from "../../../../../consts/CommonConst";
import ENV from "../../../../../env.json"
import { useState } from "react";
import { FavoriteVideoListMergedType } from "../../../types/videolist/FavoriteVideoListMergedType";
import { useCreateFavoriteVideoListQuery } from "../../useCreateFavoriteVideoListQuery";
import { useFavoriteVideoSearchConditionValue } from "../../useFavoriteVideoSearchConditionValue";
import { useFavoriteVideoListEndpoint } from "./useFavoriteVideoListEndpoint";
import { DisplayFolderListContext, DisplayVideoListContext, SetDisplayFolderListContext, SetDisplayVideoListContext } from "../../../components/videolist/FavoriteVideoDisplayVideoListProvider";
import { FavoriteVideoListResponseDataType } from "../../../types/videolist/FavoriteVideoListResponseDataType";
import { DragEndEvent } from "@dnd-kit/core";
import useMutationWrapper from "../../../../../hooks/useMutationWrapper";
import { toast } from "react-toastify";
import { getFavoriteVideoFolderEndpoint } from "../../../utils/endpoint";
import { callApi } from "../../../../../utils/callApi";


export function useFavoriteVideoArea() {

    // 画面表示用の動画リスト
    const displayVideoList = DisplayVideoListContext.useCtx();
    // 画面表示用の動画リスト(setter)
    const setDisplayVideoList = SetDisplayVideoListContext.useCtx();
    // 画面表示用のフォルダリスト
    const displayFolderList = DisplayFolderListContext.useCtx();
    // 画面表示用のフォルダリスト(setter)
    const setDisplayFolderList = SetDisplayFolderListContext.useCtx();

    // 動画一覧を取得
    const { data, isLoading, isError, isFetching } = useQueryWrapper<FavoriteVideoListResponseType, FavoriteVideoListResponseDataType>(
        {
            url: useFavoriteVideoListEndpoint(),
            select: (res: FavoriteVideoListResponseType) => {
                return res.data;
            },
            afSuccessFn: (res: FavoriteVideoListResponseDataType) => {
                setDisplayVideoList(res.item ?? []);
                setDisplayFolderList(res.folder ?? []);
            },
            afErrorFn: (res) => {
            }
        }
    );

    /**
     * 動画のフォルダ登録
     */
    const postMutation = useMutationWrapper({
        url: ``,
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: unknown) => {

            // レスポンスの型チェック
            const resParsed = resSchema().safeParse(res);

            if (!resParsed.success) {
                toast.error(`フォルダの登録に失敗しました。時間をおいて再度お試しください。`);
                return;
            }

        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {
            toast.error(`フォルダの登録に失敗しました。`);
        },
    });

    /**
     * 動画をフォルダに登録
     */
    function handleDragEnd(event: DragEndEvent) {

        const { active, over } = event;

        if (!over) {
            return;
        }

        // ドラッグ中の動画ID
        const videoId = active.id as string;
        // ドロップ先フォルダのID
        const folderId = over.id as string;

        if (!videoId || !folderId) {
            toast.error("フォルダに登録できません。");
            return;
        }

        // 一覧から動画を削除
        // setDisplayVideoList((prev) => prev.filter((v) => v.id !== videoId));

        // // リクエスト送信
        // postMutation.mutate({
        //     url: getFavoriteVideoFolderEndpoint(folderId),
        //     body: { videoId },
        // });

        callApi({
            method: `POST`,
            url: getFavoriteVideoFolderEndpoint(folderId),
            body: {
                videoId
            },
            onSuccess: (res: unknown) => {

            }
        });
    }

    return {
        isLoading,
        isError,
        displayVideoList,
        isFetching,
        total: data?.total,
        displayFolderList,
        handleDragEnd
    }
}