import { mediaQuery, useMediaQuery } from "../../../../../hooks/useMediaQuery";
import { getFolder } from "../../../api/getFolder";
import { FolderResponseType } from "../../../types/videolist/FolderResponseType";
import { useFolderId } from "../useFolderId";

export function useFavoriteVideoSearchArea() {

    // 画面サイズ判定
    const isPcLess = useMediaQuery(mediaQuery.pcLess);
    // フォルダID
    const folderId = useFolderId();

    // フォルダ情報取得
    const { data } = getFolder({
        folderId,
        select: (res: FolderResponseType) => {
            return res.data;
        },
        onError: (res) => {
        }
    });

    return {
        isPcLess,
        data,
    };
}