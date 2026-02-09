import { DragEndEvent, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { toast } from "react-toastify";
import { FLG } from "../../../../../consts/CommonConst";
import { errResType, resSchema } from "../../../../../hooks/useMutationWrapperBase";
import { callApi } from "../../../../../utils/callApi";
import { getFavoriteVideoList } from "../../../api/getFavoriteVideoList";
import { DisplayFolderListContext, DisplayVideoListContext, SetDisplayFolderListContext, SetDisplayVideoListContext } from "../../../components/videolist/FavoriteVideoDisplayVideoListProvider";
import { FavoriteVideoListMergedType } from "../../../types/videolist/FavoriteVideoListMergedType";
import { FavoriteVideoListResponseDataType } from "../../../types/videolist/FavoriteVideoListResponseDataType";
import { FavoriteVideoListResponseType } from "../../../types/videolist/FavoriteVideoListResponseType";
import { FolderType } from "../../../types/videolist/FolderType";
import { getFavoriteVideoFolderEndpoint } from "../../../utils/endpoint";
import { useFavoriteVideoSearchConditionValue } from "../../useFavoriteVideoSearchConditionValue";


export function useFavoriteVideoArea() {

    // 画面表示用の動画リスト
    const displayVideoList = DisplayVideoListContext.useCtx();
    // 画面表示用の動画リスト(setter)
    const setDisplayVideoList = SetDisplayVideoListContext.useCtx();
    // 画面表示用のフォルダリスト
    const displayFolderList = DisplayFolderListContext.useCtx();
    // 画面表示用のフォルダリスト(setter)
    const setDisplayFolderList = SetDisplayFolderListContext.useCtx();
    // 検索条件
    const searchConditionObj = useFavoriteVideoSearchConditionValue();

    // ドラッグ設定
    const dragSensors = useSensors(
        // PC用
        useSensor(MouseSensor, {
            activationConstraint: {
                distance: 3,
            },
        }),
        // スマホ用
        useSensor(TouchSensor, {
            activationConstraint: {
                delay: 150,
                tolerance: 10,
            },
        })
    );

    // 動画一覧を取得
    const { data, isLoading, isError, isFetching } = getFavoriteVideoList({
        searchConditionObj,
        select: (res: FavoriteVideoListResponseType) => {
            return res.data;
        },
        onSuccess: (res: FavoriteVideoListResponseDataType) => {
            setDisplayVideoList(res.item ?? []);
            setDisplayFolderList(res.folder ?? []);
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

        // リクエスト送信
        callApi({
            method: `POST`,
            url: getFavoriteVideoFolderEndpoint(folderId),
            body: {
                videoId
            },
            onSuccess: (res: unknown) => {

                // レスポンスの型チェック
                const resParsed = resSchema().safeParse(res);

                if (!resParsed.success) {
                    toast.error(`フォルダの登録に失敗しました。時間をおいて再度お試しください。`);
                    return;
                }

                // フォルダにサムネをオーバーレイ表示する
                setDisplayFolderList((e: FolderType[]) => {

                    // フォルダに登録した動画
                    const folderdVideo = displayVideoList.find((e1) => {
                        return e1.videoId === videoId;
                    });

                    if (!folderdVideo) {
                        return e;
                    }

                    if (Number.isNaN(folderId)) {
                        return e;
                    }

                    const thumbnails = folderdVideo.snippet.thumbnails;

                    return e.map((e1: FolderType) => {

                        if (e1.folderId !== parseInt(folderId)) {
                            return e1;
                        }

                        return {
                            ...e1,
                            thumbnails
                        }
                    });
                });

                // フォルダ登録後に一覧から非表示にする
                setDisplayVideoList((e: FavoriteVideoListMergedType[]) => {

                    const newList = e.filter((e1) => {
                        return e1.id !== videoId || e1.isVisibleAfterFolderAdd === FLG.ON;
                    });
                    return newList;
                });

                let folderName = ``;

                if (!Number.isNaN(folderId)) {
                    folderName = displayFolderList.find((e) => e.folderId === parseInt(folderId))?.name || ``;
                }

                toast.success(`${folderName}フォルダに登録しました。`);
            },
            // 失敗後の処理
            onError: (res: unknown) => {

                const errRes = res as errResType;
                const message = errRes.response.data.message;

                if (message) {
                    toast.error(message);
                }
                else {
                    toast.error(`フォルダの登録に失敗しました。`);
                }

            },
        });
    }

    return {
        isLoading,
        isError,
        displayVideoList,
        isFetching,
        total: data?.total,
        displayFolderList,
        handleDragEnd,
        dragSensors,
        selectedFavoriteVideoMode: searchConditionObj.selectedFavoriteVideoMode,
    }
}