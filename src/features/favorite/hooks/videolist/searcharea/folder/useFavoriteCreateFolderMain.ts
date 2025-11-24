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


type propsType = {
    close: () => void,
}

export function useFavoriteCreateFolderMain(props: propsType) {

    // フォルダ名
    const [folderName, setFolderName] = useState(``);
    // 確認用モーダル表示フラグ
    const [isOpenConfirm, setIsOpenConfirm] = useState(false);
    // 動画一覧再取得用
    const { invalidate: invalidataFavorite } = useInvalidateQuery(useFavoriteVideoListEndpoint());

    /**
     * フォルダ作成リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${VIDEO_MNG_PATH}${ENV.FOLDER}`,
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: unknown) => {

            // レスポンスの型チェック
            const resParsed = resSchema().safeParse(res);

            if (!resParsed.success) {
                toast.error(`フォルダの作成に失敗しました。時間をおいて再度お試しください。`);
                return;
            }

            const message = resParsed.data.message;
            if (message) {
                toast.success(message);
            }

            // 動画一覧再取得
            invalidataFavorite();
            setIsOpenConfirm(false);
            props.close();
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {

            const message = res.response.data.message;
            if (message) {
                toast.error(message);
            }
            setIsOpenConfirm(false);
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

    /**
     * 確認モーダル表示
     */
    function openConfirmModal() {

        if (!folderName) {
            toast.warn(`フォルダ名を入力してください。`);
            return;
        }

        setIsOpenConfirm(true);
    }

    /**
     * 確認モーダル非表示
     */
    function closeConfirmModal() {
        setIsOpenConfirm(false);
    }

    return {
        execute,
        isOpenConfirm,
        openConfirmModal,
        closeConfirmModal,
        folderName,
        setFolderName,
    }
}