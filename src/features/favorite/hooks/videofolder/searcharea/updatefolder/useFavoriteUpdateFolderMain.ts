import { useState } from "react";
import { toast } from "react-toastify";
import { useInvalidateQuery } from "../../../../../../hooks/useInvalidateQuery";
import useMutationWrapper from "../../../../../../hooks/useMutationWrapper";
import { errResType, resSchema } from "../../../../../../hooks/useMutationWrapperBase";
import { DEFAULT_FOLDER_COLOR } from "../../../../const/FavoriteConst";
import { UpdateFolderRequestType } from "../../../../types/videofolder/searcharea/updatefolder/UpdateFolderRequestType";
import { FolderType } from "../../../../types/videolist/FolderType";
import { folderIdEndpoint } from "../../../../utils/endpoint";
import { useFolderId } from "../../useFolderId";


type propsType = {
    close: () => void,
    folder: FolderType,
}

export function useFavoriteUpdateFolderMain(props: propsType) {

    // フォルダ名
    const [folderName, setFolderName] = useState(props.folder.name);
    // フォルダID
    const folderId = useFolderId();
    // フォルダ情報再取得用
    const { invalidate: invalidataFavorite } = useInvalidateQuery(folderIdEndpoint(folderId));
    // フォルダカラー
    const [folderColor, setFolderColor] = useState(props.folder.folderColor || DEFAULT_FOLDER_COLOR);

    /**
     * フォルダ名更新リクエスト
     */
    const postMutation = useMutationWrapper({
        url: folderIdEndpoint(folderId),
        method: "PUT",
        // 正常終了後の処理
        afSuccessFn: (res: unknown) => {

            // レスポンスの型チェック
            const resParsed = resSchema().safeParse(res);

            if (!resParsed.success) {
                toast.error(`フォルダ名の更新に失敗しました。時間をおいて再度お試しください。`);
                props.close();
                return;
            }

            // フォルダ情報再取得
            invalidataFavorite();
            toast.success("フォルダ名を更新しました。");
            props.close();
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
     * フォルダ名を更新する
     * @param videoId 
     * @returns 
     */
    function execute() {

        const body: UpdateFolderRequestType = {
            name: folderName,
            folderColor
        }

        // リクエスト送信
        postMutation.mutate(body);
    }

    return {
        execute,
        folderName,
        setFolderName,
        folderColor,
        setFolderColor,
    }
}