import useQueryWrapper from "../../../../../../hooks/useQueryWrapper";
import { FolderShareVideosResponseDataType } from "../../../../types/videofolder/searcharea/deletefolder/FolderShareVideosResponseDataType";
import { FolderShareVideosResponseType } from "../../../../types/videofolder/searcharea/deletefolder/FolderShareVideosResponseType";
import { folderShareVideosEndpoint } from "../../../../utils/endpoint";
import { useFolderId } from "../../useFolderId";


export function useFavoriteDeleteFolderConfirmModal() {

    // フォルダID
    const folderId = useFolderId();

    // 別フォルダに登録された動画を取得
    const { data, isLoading } = useQueryWrapper<FolderShareVideosResponseType, FolderShareVideosResponseDataType[]>(
        {
            url: folderShareVideosEndpoint(folderId),
            select: (res: FolderShareVideosResponseType) => {
                return res.data;
            },
            afErrorFn: (res) => {
            },
        }
    );

    return {
        data,
        isLoading,
    }
}