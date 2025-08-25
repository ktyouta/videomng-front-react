import { useAtom, useAtomValue } from "jotai";
import { useState } from "react";
import useQueryWrapper from "../../../../Common/Hook/useQueryWrapper";
import { VIDEO_MNG_PATH } from "../../../../Common/Const/CommonConst";
import ENV from "../../../../env.json";
import { errResType } from "../../../../Common/Hook/useMutationWrapperBase";
import { FavoriteVideoMemoResponseType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoResponseType";
import { FavoriteVideoTagResponseType } from "../../../Type/VideoDetail/VideoTag/FavoriteVideoTagResponseType";
import { FavoriteVideoTagType } from "../../../Type/VideoDetail/VideoTag/FavoriteVideoTagType";
import { tagType } from "../../../../Common/Component/TagsComponent";
import { toast } from "react-toastify";
import { useFavoriteTagEndpoint } from "./useFavoriteTagEndpoint";
import { FavoriteVideoIdContext } from "../../../Component/Favorite";


type propsType = {
    favoriteVideoTagEditList: tagType[],
    setFavoriteVideoTagEditList: React.Dispatch<React.SetStateAction<tagType[]>>
}

export function useFavoriteTagEditList(props: propsType) {

    // タグマスタリスト表示フラグ
    const [isOpenTagMasterList, setIsOpenTagMasterList] = useState(true);


    // タグマスタリストを取得
    const { data: tagMasterList } = useQueryWrapper<FavoriteVideoTagResponseType, tagType[]>(
        {
            url: `${VIDEO_MNG_PATH}${ENV.TAG_INFO}`,
            select: (res: FavoriteVideoTagResponseType) => {

                const tagComboList = res.data.map((e: FavoriteVideoTagType) => {
                    return {
                        value: e.tagName,
                        label: e.tagName,
                    }
                });

                return tagComboList;
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
            }
        }
    );

    /**
     * 入力欄のタグを編集リストに追加する
     */
    function addTagEditList(addTag: tagType) {

        const existTag = props.favoriteVideoTagEditList.find((e) => {
            return e.label === addTag.label;
        });

        // 同名のタグが設定されている場合は追加しない
        if (existTag) {
            toast.error(`同名のタグが設定されています。`);
            return;
        }

        // 編集リストに追加
        props.setFavoriteVideoTagEditList((e: tagType[]) => {
            return [{ label: addTag.label, value: null }, ...e];
        });
    }

    /**
     * タグ削除
     * @param tagIndex 
     */
    function deleteTag(tagIndex: number) {
        props.setFavoriteVideoTagEditList((e) => {
            return e.filter((_, index) => index !== tagIndex);
        });
    }

    /**
     * タグマスタリスト表示切り替え
     */
    function switchTagMasterList() {
        setIsOpenTagMasterList(!isOpenTagMasterList);
    }

    return {
        deleteTag,
        tagMasterList,
        addTagEditList,
        isOpenTagMasterList,
        switchTagMasterList,
    }
}