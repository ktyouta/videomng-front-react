import { getFolderVideo } from "../../../api/getFolderVideo";
import { DisplayFolderListContext, DisplayVideoListContext, SetDisplayFolderListContext, SetDisplayVideoListContext } from "../../../components/videofolder/FavoriteVideoFolderDisplayVideoListProvider";
import { FavoriteVideoListResponseDataType } from "../../../types/videolist/FavoriteVideoListResponseDataType";
import { FavoriteVideoListResponseType } from "../../../types/videolist/FavoriteVideoListResponseType";
import { useFavoriteVideoFolderSearchConditionValue } from "../useFavoriteVideoFolderSearchConditionValue";
import { useFolderId } from "../useFolderId";


export function useFavoriteVideoFolderArea() {

    // 画面表示用の動画リスト
    const displayVideoList = DisplayVideoListContext.useCtx();
    // 画面表示用の動画リスト(setter)
    const setDisplayVideoList = SetDisplayVideoListContext.useCtx();
    // 画面表示用フォルダリスト
    const displayFolderList = DisplayFolderListContext.useCtx();
    // 画面表示用フォルダリスト(setter)
    const setDisplayFolderList = SetDisplayFolderListContext.useCtx();
    // フォルダID
    const folderId = useFolderId();
    // 検索条件
    const searchConditionObj = useFavoriteVideoFolderSearchConditionValue();

    // 動画一覧を取得
    const { data, isLoading, isError, isFetching } = getFolderVideo({
        folderId,
        searchConditionObj,
        select: (res: FavoriteVideoListResponseType) => {
            return res.data;
        },
        onSuccess: (res: FavoriteVideoListResponseDataType) => {
            setDisplayVideoList(res.item ?? []);
            setDisplayFolderList(res.folder ?? []);
        }
    });

    return {
        isLoading,
        isError,
        displayVideoList,
        isFetching,
        total: data?.total,
        displayFolderList,
    }
}