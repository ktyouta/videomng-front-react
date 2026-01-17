import { useMemo } from "react";
import { MultiValue } from "react-select";
import { Option } from "../../../../../../components/MultiSelectbox";
import { useReplaceQuery } from "../../../../../../hooks/useReplaceQuery";
import { useVideoCategory } from "../../../../../main/hooks/useVideoCategory";
import { FAVORITE_LEVEL_SETTING_LIST } from "../../../../const/FavoriteConst";
import { useCreateFavoriteVideoListQuery } from "../../../useCreateFavoriteVideoListQuery";
import { INIT_PAGE, useFavoriteVideoSearchConditionValue } from "../../../useFavoriteVideoSearchConditionValue";
import { useViewStatusList } from "../../../useViewStatusList";
import { useFolderMasterList } from "../../useFolderMasterList";
import { useTagMasterList } from "../../useTagMasterList";


type propsType = {
    close: () => void;
}

export function useFavoriteSearchConditionMain(props: propsType) {

    // 動画カテゴリ
    const { data: videoCategory } = useVideoCategory();
    // 視聴状況リストを取得
    const { data: viewStatusList } = useViewStatusList();
    // 検索条件
    const {
        selectedFavoriteVideoCategory,
        setSelectedFavoriteVideoCategory,
        selectedFavoriteVideoViewStatus,
        setSelectedFavoriteVideoViewStatus,
        selectedFavoriteVideoTag,
        setSelectedFavoriteVideoTag,
        selectedFavoriteVideoFavoriteLevel,
        setSelectedFavoriteVideoFavoriteLevel,
        selectedFavoriteVideoFolder,
        setSlectedFavoriteVideoFolder,
        selectedFavoriteVideoMode,
        resetPage,
        reset, } = useFavoriteVideoSearchConditionValue();
    // クエリ作成用
    const { create } = useCreateFavoriteVideoListQuery();
    // クエリパラメータ変更用
    const { replace } = useReplaceQuery();
    // タグマスタリストを取得
    const { data: tagMasterList } = useTagMasterList({
        isGetChache: false
    });
    // フォルダリスト
    const { data: folderList } = useFolderMasterList();

    // お気に入り度リスト
    const favoriteLevelList = useMemo(() => {

        const favoriteLevelList: Option[] = [...Array(FAVORITE_LEVEL_SETTING_LIST + 1)].map((_, index) => {

            const label = index === 0 ? `未設定` : index.toString();

            return {
                label,
                value: index.toString(),
            }
        });

        return favoriteLevelList;
    }, []);

    /**
     * カテゴリ選択イベント
     * @param selectedcCategory 
     */
    function changeVideoCategory(selectedCategorys: MultiValue<Option>,) {

        const selectedValues = selectedCategorys.map((e) => e.value).join(`,`);

        if (!selectedFavoriteVideoCategory && !selectedValues) {
            return;
        }

        if (selectedFavoriteVideoCategory === selectedValues) {
            return;
        }

        const newQuery = create({
            videoCategory: selectedValues,
            page: INIT_PAGE
        });

        // クエリパラメータを更新
        replace(newQuery);

        setSelectedFavoriteVideoCategory(selectedValues);
        resetPage();

        props.close();
    }

    /**
     * 視聴状況選択イベント
     * @param selectedcCategory 
     */
    function changeViewStatus(selectedStatuses: MultiValue<Option>,) {

        const selectedValues = selectedStatuses.map((e) => e.value).join(`,`);

        if (!selectedFavoriteVideoViewStatus && !selectedValues) {
            return;
        }

        if (selectedFavoriteVideoViewStatus === selectedValues) {
            return;
        }

        const newQuery = create({
            viewStatus: selectedValues,
            page: INIT_PAGE
        });

        // クエリパラメータを更新
        replace(newQuery);

        setSelectedFavoriteVideoViewStatus(selectedValues);
        resetPage();

        props.close();
    }

    /**
     * タグ選択イベント
     * @param selectedcCategory 
     */
    function changeVideoTag(selectedVideoTag: MultiValue<Option>,) {

        const selectedTagValues = selectedVideoTag.map((e) => e.value).join(`,`);

        if (!selectedFavoriteVideoTag && !selectedTagValues) {
            return;
        }

        if (selectedFavoriteVideoTag === selectedTagValues) {
            return;
        }

        const newQuery = create({
            videoTag: selectedTagValues,
            page: INIT_PAGE
        });

        // クエリパラメータを更新
        replace(newQuery);

        setSelectedFavoriteVideoTag(selectedTagValues);
        resetPage();
        props.close();
    }

    /**
     * お気に入り度選択イベント
     * @param selectedcCategory 
     */
    function changeFavoriteLevel(selectedFavoriteLevel: MultiValue<Option>,) {

        const selectedValues = selectedFavoriteLevel.map((e) => e.value).join(`,`);

        if (!selectedFavoriteVideoFavoriteLevel && !selectedValues) {
            return;
        }

        if (selectedFavoriteVideoFavoriteLevel === selectedValues) {
            return;
        }

        const newQuery = create({
            favoriteLevel: selectedValues,
            page: INIT_PAGE
        });

        // クエリパラメータを更新
        replace(newQuery);

        setSelectedFavoriteVideoFavoriteLevel(selectedValues);
        resetPage();
        props.close();
    }

    /**
     * フォルダ表示選択イベント
     * @param value 
     */
    function changeFolder(value: MultiValue<Option>) {

        const selectedValues = value.map((e) => e.value).join(`,`);

        if (!selectedFavoriteVideoFolder && !selectedValues) {
            return;
        }

        if (selectedFavoriteVideoFolder === selectedValues) {
            return;
        }

        const newQuery = create({
            folder: selectedValues,
            page: INIT_PAGE
        });

        // クエリパラメータを更新
        replace(newQuery);

        setSlectedFavoriteVideoFolder(selectedValues);
        resetPage();
        props.close();
    }

    /**
     * フィルターのクリアイベント
     */
    function clearFilter() {

        // クエリパラメータを更新
        replace(``);

        reset();
        props.close();
    }

    return {
        videoCategory,
        selectedFavoriteVideoCategory,
        viewStatusList,
        selectedFavoriteVideoViewStatus,
        changeVideoCategory,
        changeViewStatus,
        selectedFavoriteVideoTag,
        tagMasterList,
        changeVideoTag,
        favoriteLevelList,
        selectedFavoriteVideoFavoriteLevel,
        changeFavoriteLevel,
        selectedFavoriteVideoFolder,
        changeFolder,
        folderList,
        clearFilter,
        selectedFavoriteVideoMode,
    };
}