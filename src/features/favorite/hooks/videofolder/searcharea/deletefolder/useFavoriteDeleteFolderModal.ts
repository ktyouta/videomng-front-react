import { useState } from "react";
import { mediaQuery, useMediaQuery } from "../../../../../../hooks/useMediaQuery";
import useSwitch from "../../../../../../hooks/useSwitch";
import { useFolderId } from "../../useFolderId";
import { PREV_PATH_KEY } from "../../../../../../consts/CommonConst";
import { getPrevPath } from "../../../../../../utils/CommonFunction";
import { ROUTER_PATH } from "../../../../../../consts/RouterPath";
import { useNavigate } from "react-router-dom";
import useMutationWrapper from "../../../../../../hooks/useMutationWrapper";
import { folderIdEndpoint } from "../../../../utils/endpoint";
import { errResType, resSchema } from "../../../../../../hooks/useMutationWrapperBase";
import { toast } from "react-toastify";
import { DeleteFolderRequestType } from "../../../../types/videofolder/searcharea/deletefolder/DeleteFolderRequestType";
import { DELETEFAVORITEVIDEOINFOLDER } from "../../../../const/FavoriteConst";


export function useFavoriteDeleteFolderModal() {

    // モーダルの表示フラグ
    const { flag: isOpenModal, on: openModal, off: closeModal } = useSwitch();
    // モーダルの表示フラグ
    const { flag: isOpenConfirmModal, on: openConfirmModal, off: closeConfirmModal } = useSwitch();
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);
    // フォルダID
    const folderId = useFolderId();
    // フォルダ内のお気に入り動画削除フラグ
    const [deleteVideoFlg, setDeleteVideoFlg] = useState<string>(DELETEFAVORITEVIDEOINFOLDER.OFF);
    // 前画面のパスを取得
    const prev = getPrevPath(PREV_PATH_KEY, ROUTER_PATH.FAVORITE.ROOT);
    //ルーティング用
    const navigate = useNavigate();

    /**
     * 前画面に遷移
     */
    function back() {
        navigate(prev);
    }

    /**
     * フォルダ名更新リクエスト
     */
    const postMutation = useMutationWrapper({
        url: folderIdEndpoint(folderId),
        method: "DELETE",
        // 正常終了後の処理
        afSuccessFn: (res: unknown) => {

            // レスポンスの型チェック
            const resParsed = resSchema().safeParse(res);

            if (!resParsed.success) {
                toast.error(`フォルダの削除に失敗しました。時間をおいて再度お試しください。`);
                closeModal();
                return;
            }

            toast.success("フォルダを削除しました。");
            back();
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {

            const errMessage = res.response.data.message;

            if (errMessage) {
                toast.error(errMessage);
            }
        },
    });

    /**
     * コンボボックスの切り替え
     * @param value 
     */
    function changeSelect(value: string) {

        setDeleteVideoFlg((e) => {

            return e === value ? DELETEFAVORITEVIDEOINFOLDER.OFF : DELETEFAVORITEVIDEOINFOLDER.ON;
        });
    }

    /**
     * 削除モーダルオープン
     */
    function openDeleteModal() {

        setDeleteVideoFlg(DELETEFAVORITEVIDEOINFOLDER.OFF);
        openModal();
    }

    /**
     * 削除ボタン押下
     */
    function clickDelete() {

        // フォルダ内の動画をお気に入りから削除するにチェックが入っている
        if (deleteVideoFlg === DELETEFAVORITEVIDEOINFOLDER.ON) {
            closeModal();
            openConfirmModal();
            return;
        }

        execute();
    }

    /**
     * フォルダ削除
     * @param videoId 
     * @returns 
     */
    function execute() {

        const body: DeleteFolderRequestType = {
            deleteVideos: deleteVideoFlg === DELETEFAVORITEVIDEOINFOLDER.ON
        }

        // リクエスト送信
        postMutation.mutate(body);
    }

    return {
        isOpenModal,
        openDeleteModal,
        closeModal,
        isMobile,
        deleteVideoFlg,
        changeSelect,
        execute,
        clickDelete,
        isOpenConfirmModal,
        closeConfirmModal,
    }
}