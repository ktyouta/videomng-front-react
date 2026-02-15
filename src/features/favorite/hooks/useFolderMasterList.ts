import { getFolderList } from "../api/getFolderList";
import { FolderResponseType } from "../types/videolist/searcharea/filter/FolderResponseType";


export function useFolderMasterList() {

    // フォルダリストを取得
    return getFolderList({
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
