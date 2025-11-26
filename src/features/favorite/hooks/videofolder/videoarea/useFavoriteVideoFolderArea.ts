import useQueryWrapper from "../../../../../hooks/useQueryWrapper";
import { FavoriteVideoListResponseType } from "../../../types/videolist/FavoriteVideoListResponseType";
import { useFavoriteVideoListEndpoint } from "./useFavoriteVideoListEndpoint";
import { FavoriteVideoListResponseDataType } from "../../../types/videolist/FavoriteVideoListResponseDataType";
import { DisplayVideoListContext, SetDisplayVideoListContext } from "../../../components/videofolder/FavoriteVideoFolderDisplayVideoListProvider";
import { useFolderId } from "../useFolderId";


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
            url: useFavoriteVideoListEndpoint(folderId),
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