import { useMemo } from "react";
import { MultiValue } from "react-select";
import { Option } from "../../../../../../components/MultiSelectbox";
import { PREV_PATH_KEY } from "../../../../../../consts/CommonConst";
import { ROUTER_PATH } from "../../../../../../consts/RouterPath";
import { useReplaceQuery } from "../../../../../../hooks/useReplaceQuery";
import { getPrevPath } from "../../../../../../utils/CommonFunction";
import { useVideoCategory } from "../../../../../main/hooks/useVideoCategory";
import { FAVORITE_LEVEL_SETTING_LIST } from "../../../../const/FavoriteConst";
import { INIT_PAGE } from "../../../useFavoriteVideoSearchConditionValue";
import { useViewStatusList } from "../../../useViewStatusList";
import { useTagMasterList } from "../../../videolist/useTagMasterList";
import { useCreateFavoriteVideoFolderVideoListQuery } from "../../useCreateFavoriteVideoFolderVideoListQuery";
import { useFavoriteVideoFolderSearchConditionValue } from "../../useFavoriteVideoFolderSearchConditionValue";


type propsType = {
    close: () => void;
}

export function useFavoriteVideoFolderSearchConditionMain(props: propsType) {

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
        resetPage,
        reset, } = useFavoriteVideoFolderSearchConditionValue();
    // クエリ作成用
    const { create } = useCreateFavoriteVideoFolderVideoListQuery();
    // クエリパラメータ変更用
    const { replace } = useReplaceQuery();
    // タグマスタリストを取得
    const { data: tagMasterList } = useTagMasterList({
        isGetChache: false
    });

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
            folderVideoCategory: selectedValues,
            folderPage: INIT_PAGE
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
            folderViewStatus: selectedValues,
            folderPage: INIT_PAGE
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
            folderVideoTag: selectedTagValues,
            folderPage: INIT_PAGE
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
            folderFavoriteLevel: selectedValues,
            folderPage: INIT_PAGE
        });

        // クエリパラメータを更新
        replace(newQuery);

        setSelectedFavoriteVideoFavoriteLevel(selectedValues);
        resetPage();
        props.close();
    }

    /**
     * フィルターのクリアイベント
     */
    function clearFilter() {

        // 前画面のパスを取得
        const prev = getPrevPath(PREV_PATH_KEY, ROUTER_PATH.FAVORITE.ROOT);
        const query = `?${PREV_PATH_KEY}=${prev}`

        // クエリパラメータを更新
        replace(query);

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
        clearFilter,
    };
}