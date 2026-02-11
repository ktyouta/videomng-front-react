import { toast } from "react-toastify";
import useSwitch from "../../../../../../hooks/useSwitch";
import { getSharedVideos } from "../../../../api/getSharedVideos";
import { FolderShareVideosResponseType } from "../../../../types/videofolder/searcharea/deletefolder/FolderShareVideosResponseType";
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
    const { data, isLoading } = getSharedVideos({
        folderId,
        select: (res: FolderShareVideosResponseType) => {
            return res.data;
        },
        onError: (res) => {
            toast.error(`通信エラーまたは一時的な問題が発生しています。お手数ですが、しばらく時間をおいて再度お試しください。`);
            props.closeConfirmModal();
        },
    });

    return {
        data,
        isLoading,
        isOpen,
        open,
        close,
    }
}