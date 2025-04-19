import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { videoCategoryAtom } from "../../Main/Atom/MainAtom";
import { selectedFavoriteVideoCategoryAtom, selectedFavoriteVideoTagAtom, selectedFavoriteVideoviewStatusAtom, viewStatusListAtom } from "../Atom/FavoriteAtom";
import { useEffect, useState } from "react";
import { comboType } from "../../Common/Component/ComboComponent";
import { objectDeepCopy } from "../../Common/Function/CommonFunction";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { FavoriteVideoTagResponseType } from "../Type/FavoriteVideoTagResponseType";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import { tagType } from "../../Common/Component/TagsComponent";
import ENV from "../../env.json";
import { FavoriteVideoTagType } from "../Type/FavoriteVideoTagType";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";


type propsType = {
    close: () => void;
}

export function useFavoriteSearchConditionMain(props: propsType) {

    // 動画カテゴリ
    const videoCategory = useAtomValue(videoCategoryAtom);
    // 動画一覧検索条件選択値(カテゴリ)
    const [selectedFavoriteVideoCategory, setSelectedFavoriteVideoCategory] = useAtom(selectedFavoriteVideoCategoryAtom);
    // 動画一覧検索条件選択値(視聴状況)
    const [selectedFavoriteVideoviewStatus, setSelectedFavoriteVideoviewStatus] = useAtom(selectedFavoriteVideoviewStatusAtom);
    // 視聴状況リスト
    const viewStatusList = useAtomValue(viewStatusListAtom);
    // 視聴状況選択リスト
    const [viewStatusSelectList, setViewStatusSelectList] = useState<comboType[]>();
    // 動画一覧検索条件選択値(タグ)
    const [selectedFavoriteVideoTag, setSelectedFavoriteVideoTag] = useAtom(selectedFavoriteVideoTagAtom);
    // タグマスタリスト
    const [tagMasterList, setTagMasterList] = useState<comboType[]>([]);


    /**
     * 画面表示用の視聴状況リストを作成
     */
    useEffect(() => {

        // 視聴状況選択リストが作成されている場合はスキップ
        if (viewStatusSelectList && viewStatusSelectList.length > 0) {
            return;
        }

        if (!viewStatusList || viewStatusList.length === 0) {
            return;
        }

        const copyViewStatusList = objectDeepCopy(viewStatusList);
        const newViewStatusSelectList = [{
            value: ``,
            label: `すべて`,
        }, ...copyViewStatusList];

        setViewStatusSelectList(newViewStatusSelectList);

    }, viewStatusList);


    // タグマスタリストを取得
    useQueryWrapper<FavoriteVideoTagResponseType>(
        {
            url: `${VIDEO_MNG_PATH}${ENV.TAG_INFO}`,
            afSuccessFn: (response: FavoriteVideoTagResponseType) => {

                const tagComboList = response.data.map((e: FavoriteVideoTagType) => {
                    return {
                        value: e.tagName,
                        label: e.tagName,
                    }
                });

                setTagMasterList([{
                    value: ``,
                    label: `すべて`,
                }, ...tagComboList]);
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
            }
        }
    );

    /**
     * カテゴリ選択イベント
     * @param selectedcCategory 
     */
    function changeVideoCategory(selectedCategory: string,) {
        setSelectedFavoriteVideoCategory(selectedCategory);
        props.close();
    }

    /**
     * 視聴状況選択イベント
     * @param selectedcCategory 
     */
    function changeViewStatus(selectedViewStatus: string,) {
        setSelectedFavoriteVideoviewStatus(selectedViewStatus);
        props.close();
    }

    /**
     * タグ選択イベント
     * @param selectedcCategory 
     */
    function changeVideoTag(selectedVideoTag: string,) {
        setSelectedFavoriteVideoTag(selectedVideoTag);
        props.close();
    }

    return {
        videoCategory,
        selectedFavoriteVideoCategory,
        viewStatusSelectList,
        selectedFavoriteVideoviewStatus,
        changeVideoCategory,
        changeViewStatus,
        selectedFavoriteVideoTag,
        tagMasterList,
        changeVideoTag,
    };
}