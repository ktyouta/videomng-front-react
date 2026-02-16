import { useState } from "react";
import { toast } from "react-toastify";
import { VIDEO_MNG_PATH } from "../../../../../../consts/CommonConst";
import ENV from "../../../../../../env.json";
import { useInvalidateQuery } from "../../../../../../hooks/useInvalidateQuery";
import { mediaQuery, useMediaQuery } from "../../../../../../hooks/useMediaQuery";
import useMutationWrapper from "../../../../../../hooks/useMutationWrapper";
import { errResType, resSchema } from "../../../../../../hooks/useMutationWrapperBase";
import { favoriteVideoKeys } from "../../../../api/queryKey";
import { DEFAULT_FOLDER_COLOR } from "../../../../const/FavoriteConst";
import { CreateFolderInFolderRequestType } from "../../../../types/videofolder/searcharea/createfolder/CreateFolderInFolderRequestType";
import { useFavoriteVideoFolderSearchConditionValue } from "../../useFavoriteVideoFolderSearchConditionValue";
import { useFolderId } from "../../useFolderId";


type propsType = {
    close: () => void,
}

export function useFavoriteCreateFolderInFolderMain(props: propsType) {

    // フォルダID
    const folderId = useFolderId();
    // フォルダ名
    const [folderName, setFolderName] = useState(``);
    // 検索条件
    const searchConditionObj = useFavoriteVideoFolderSearchConditionValue();
    // 動画一覧再取得用
    const { invalidate: invalidataFavorite } = useInvalidateQuery(favoriteVideoKeys.folderVideo({
        folderId,
        searchConditionObj
    }));
    // フォルダカラー
    const [folderColor, setFolderColor] = useState(DEFAULT_FOLDER_COLOR);
    // 画面サイズ判定
    const isPcLess = useMediaQuery(mediaQuery.pcLess);

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
            props.close();
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {

            const message = res.response.data.message;
            if (message) {
                toast.error(message);
            }
        },
    });

    /**
     * フォルダを作成する
     * @param videoId 
     * @returns 
     */
    function execute() {

        const body: CreateFolderInFolderRequestType = {
            name: folderName,
            folderColor,
            parentFolderId: folderId
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
        isPcLess,
    }
}