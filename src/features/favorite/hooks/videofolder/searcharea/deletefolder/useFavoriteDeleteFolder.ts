import { useState } from "react";
import { toast } from "react-toastify";
import ENV from "../../../../../../env.json";
import { AxiosProgressEvent } from "axios";
import useMutationWrapper from "../../../../../../hooks/useMutationWrapper";
import { PREV_PATH_KEY, VIDEO_MNG_PATH } from "../../../../../../consts/CommonConst";
import { errResType, resSchema } from "../../../../../../hooks/useMutationWrapperBase";
import { CreateFolderRequestType } from "../../../../types/videolist/searcharea/folder/CreateFolderRequestType";
import { useInvalidateQuery } from "../../../../../../hooks/useInvalidateQuery";
import { useFavoriteVideoListEndpoint } from "../../videoarea/useFavoriteVideoListEndpoint";
import { folderIdEndpoint } from "../../../../utils/endpoint";
import { useFolderId } from "../../useFolderId";
import { FolderType } from "../../../../types/videolist/FolderType";
import { getPrevPath } from "../../../../../../utils/CommonFunction";
import { ROUTER_PATH } from "../../../../../../consts/RouterPath";
import { useNavigate } from "react-router-dom";
import { DeleteFolderRequestType } from "../../../../types/videofolder/searcharea/deletefolder/DeleteFolderRequestType";


type propsType = {
    close: () => void,
}

export function useFavoriteDeleteFolder(props: propsType) {

    // フォルダID
    const folderId = useFolderId();
    // フォルダ内のお気に入り動画削除フラグ
    const [deleteVideoFlg, setDeleteVideoFlg] = useState(`0`);
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
                props.close();
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

            return e === value ? `0` : `1`;
        });
    }

    /**
     * フォルダ削除
     * @param videoId 
     * @returns 
     */
    function execute() {

        const body: DeleteFolderRequestType = {
            deleteVideos: deleteVideoFlg === `1`
        }

        // リクエスト送信
        postMutation.mutate(body);
    }

    return {
        execute,
        deleteVideoFlg,
        changeSelect,
    }
}