import { Option } from "../../../../components/Selectbox";
import { VIDEO_MNG_PATH } from "../../../../consts/CommonConst";
import ENV from "../../../../env.json";
import useQueryWrapper from "../../../../hooks/useQueryWrapper";
import { FolderResponseType } from "../../types/videolist/searcharea/filter/FolderResponseType";


export function useFolderMasterList() {

    // フォルダリストを取得
    return useQueryWrapper<FolderResponseType, Option[]>(
        {
            url: `${VIDEO_MNG_PATH}${ENV.FOLDER}`,
            select: (res: FolderResponseType) => {

                const folderList = res.data;

                return [
                    ...folderList.map((e) => {
                        return {
                            value: e.folderId.toString(),
                            label: e.name,
                        }
                    })
                ]
            },
            afErrorFn: (res) => {
            }
        }
    );
}