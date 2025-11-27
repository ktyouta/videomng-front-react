import { useState } from "react";
import { toast } from "react-toastify";
import ENV from "../../../../../../env.json";
import { AxiosProgressEvent } from "axios";
import useMutationWrapper from "../../../../../../hooks/useMutationWrapper";
import { VIDEO_MNG_PATH } from "../../../../../../consts/CommonConst";
import { errResType, resSchema } from "../../../../../../hooks/useMutationWrapperBase";
import { CreateFolderRequestType } from "../../../../types/videolist/searcharea/folder/CreateFolderRequestType";
import { useInvalidateQuery } from "../../../../../../hooks/useInvalidateQuery";
import { useFavoriteVideoListEndpoint } from "../../videoarea/useFavoriteVideoListEndpoint";
import { folderIdEndpoint } from "../../../../utils/endpoint";
import { useFolderId } from "../../useFolderId";
import { FolderType } from "../../../../types/videolist/FolderType";


type propsType = {
    close: () => void,
    folder: FolderType,
}

export function useFavoriteUpdateFolderMain(props: propsType) {

    // フォルダ名
    const [folderName, setFolderName] = useState(props.folder.name);
    // フォルダID
    const folderId = useFolderId();

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
     * フォルダを作成する
     * @param videoId 
     * @returns 
     */
    function execute() {

        const body: CreateFolderRequestType = {
            name: folderName
        }

        // リクエスト送信
        postMutation.mutate(body);
    }

    return {
        execute,
        folderName,
        setFolderName,
    }
}