import { VIDEO_MNG_PATH } from "../../../../../consts/CommonConst";
import { mediaQuery, useMediaQuery } from "../../../../../hooks/useMediaQuery";
import useQueryWrapper from "../../../../../hooks/useQueryWrapper";
import ENV from '../../../../../env.json';
import { FolderType } from "../../../types/videolist/FolderType";
import { FolderResponseType } from "../../../types/videolist/FolderResponseType";
import { getFolderEndpoint } from "../../../utils/endpoint";
import { useFolderId } from "../useFolderId";

export function useFavoriteVideoFolderSearchArea() {

    // 画面サイズ判定
    const isPcLess = useMediaQuery(mediaQuery.pcLess);
    // フォルダID
    const folderId = useFolderId();

    const { data } = useQueryWrapper<FolderResponseType, FolderType>(
        {
            url: getFolderEndpoint(folderId),
            select: (res: FolderResponseType) => {

                return res.data;
            },
            afErrorFn: (res) => {
            }
        }
    );

    return {
        isPcLess,
        data,
    };
}