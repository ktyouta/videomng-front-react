import { toast } from "react-toastify";
import useQueryWrapper from "../../../../../../hooks/useQueryWrapper";
import useSwitch from "../../../../../../hooks/useSwitch";
import { FolderShareVideosResponseDataType } from "../../../../types/videofolder/searcharea/deletefolder/FolderShareVideosResponseDataType";
import { FolderShareVideosResponseType } from "../../../../types/videofolder/searcharea/deletefolder/FolderShareVideosResponseType";
import { folderShareVideosEndpoint } from "../../../../utils/endpoint";
import { useFolderId } from "../../useFolderId";

type propsType = {
    closeConfirmModal: () => void,
}

export function useFavoriteDeleteFolderConfirmModal(props: propsType) {

    // フォルダID
    const folderId = useFolderId();
    // 別フォルダに登録された動画の表示フラグ
    const { flag: isOpen, on: open, off: close } = useSwitch();

    // 別フォルダに登録された動画を取得
    const { data, isLoading } = useQueryWrapper<FolderShareVideosResponseType, FolderShareVideosResponseDataType[]>(
        {
            url: folderShareVideosEndpoint(folderId),
            select: (res: FolderShareVideosResponseType) => {
                return res.data;
            },
            afErrorFn: (res) => {
                toast.error(`通信エラーまたは一時的な問題が発生しています。お手数ですが、しばらく時間をおいて再度お試しください。`);
                props.closeConfirmModal();
            },
        }
    );

    return {
        data,
        isLoading,
        isOpen,
        open,
        close,
    }
}