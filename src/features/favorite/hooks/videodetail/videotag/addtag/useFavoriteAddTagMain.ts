import { useState } from "react";
import { toast } from "react-toastify";
import { tagType } from "../../../../../../components/TagsComponent";
import { SetFavoriteVideoTagEditListContext } from "../../../../components/videodetail/videotag/FavoriteVideoTagEditListProvider";
import { DEFAULT_FOLDER_COLOR } from "../../../../const/FavoriteConst";


type propsType = {
    close: () => void,
}

export function useFavoriteAddTagMain(props: propsType) {

    // フォルダ名
    const [tagName, setTagName] = useState(``);
    // フォルダカラー
    const [tagColor, setTagColor] = useState(DEFAULT_FOLDER_COLOR);
    // タグ編集リスト
    const setFavoriteVideoTagEditList = SetFavoriteVideoTagEditListContext.useCtx();

    /**
     * タグを追加
     */
    function addTag() {

        if (!tagName || !tagName.trim()) {
            toast.warn(`タグ名を入力してください。`);
            return;
        }

        const newTag: tagType = {
            label: tagName,
            value: null,
            bgColor: tagColor
        }

        // 編集リストに追加
        setFavoriteVideoTagEditList((e) => {
            return [...e, newTag];
        });

        props.close();
    }

    return {
        tagName,
        setTagName,
        tagColor,
        setTagColor,
        addTag,
    }
}