import useQueryWrapper from "../../../../../hooks/useQueryWrapper";
import { DisplayVideoListContext, SetDisplayVideoListContext } from "../../../components/videofolder/FavoriteVideoFolderDisplayVideoListProvider";
import { FavoriteVideoListResponseDataType } from "../../../types/videolist/FavoriteVideoListResponseDataType";
import { FavoriteVideoListResponseType } from "../../../types/videolist/FavoriteVideoListResponseType";
import { useFolderId } from "../useFolderId";
import { useFavoriteVideoFolderVideoListEndpoint } from "./useFavoriteVideoFolderVideoListEndpoint";


export function useFavoriteVideoFolderArea() {

    // 画面表示用の動画リスト
    const displayVideoList = DisplayVideoListContext.useCtx();
    // 画面表示用の動画リスト(setter)
    const setDisplayVideoList = SetDisplayVideoListContext.useCtx();
    // フォルダID
    const folderId = useFolderId();

    // 動画一覧を取得
    const { data, isLoading, isError, isFetching } = useQueryWrapper<FavoriteVideoListResponseType, FavoriteVideoListResponseDataType>(
        {
            url: useFavoriteVideoFolderVideoListEndpoint(folderId),
            select: (res: FavoriteVideoListResponseType) => {
                return res.data;
            },
            afSuccessFn: (res: FavoriteVideoListResponseDataType) => {
                setDisplayVideoList(res.item ?? []);
            },
            afErrorFn: (res) => {
            }
        }
    );

    return {
        isLoading,
        isError,
        displayVideoList,
        isFetching,
        total: data?.total,
    }
}