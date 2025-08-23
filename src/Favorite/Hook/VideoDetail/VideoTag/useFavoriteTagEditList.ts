import { useAtom, useAtomValue } from "jotai";
import { favoriteVideoTagEditListAtom, favoriteVideoTagListAtom } from "../../../Atom/FavoriteAtom";
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


export function useFavoriteTagEditList() {

    // タグ編集リスト
    const [favoriteVideoTagEditList, setFavoriteVideoTagEditList] = useAtom(favoriteVideoTagEditListAtom);
    // タグマスタリスト
    const [tagMasterList, setTagMasterList] = useState<tagType[]>();
    // タグマスタリスト表示フラグ
    const [isOpenTagMasterList, setIsOpenTagMasterList] = useState(true);

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

                setTagMasterList(tagComboList);
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

        const existTag = favoriteVideoTagEditList.find((e) => {
            return e.label === addTag.label;
        });

        // 同名のタグが設定されている場合は追加しない
        if (existTag) {
            toast.error(`同名のタグが設定されています。`);
            return;
        }

        // 編集リストに追加
        setFavoriteVideoTagEditList((e: tagType[]) => {
            return [{ label: addTag.label, value: null }, ...e];
        });
    }

    /**
     * タグ削除
     * @param tagIndex 
     */
    function deleteTag(tagIndex: number) {
        setFavoriteVideoTagEditList((e) => {
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
        favoriteVideoTagEditList,
        deleteTag,
        tagMasterList,
        addTagEditList,
        isOpenTagMasterList,
        switchTagMasterList,
    }
}