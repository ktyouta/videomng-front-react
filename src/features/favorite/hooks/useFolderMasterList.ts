import { getFolderList } from "../api/getFolderList";
import { FolderResponseType } from "../types/videolist/searcharea/filter/FolderResponseType";

type PropsType = {
    parentFolderId?: string;
}

export function useFolderMasterList(props: PropsType) {

    // フォルダリストを取得
    return getFolderList({
        parentFolderId: props.parentFolderId,
        select: (res: FolderResponseType) => {
            return [
                ...res.data.map((e) => {
                    return {
                        value: e.id.toString(),
                        label: e.name,
                    }
                })
            ]
        }
    });
}
