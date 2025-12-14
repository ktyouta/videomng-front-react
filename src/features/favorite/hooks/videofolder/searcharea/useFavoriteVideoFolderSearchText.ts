import { useState } from "react";
import useQueryWrapper from "../../../../../hooks/useQueryWrapper";
import { SetDisplayVideoListContext } from "../../../components/videofolder/FavoriteVideoFolderDisplayVideoListProvider";
import { FavoriteVideoListResponseDataType } from "../../../types/videolist/FavoriteVideoListResponseDataType";
import { FavoriteVideoListResponseType } from "../../../types/videolist/FavoriteVideoListResponseType";
import { useFolderId } from "../useFolderId";
import { useFavoriteVideoFolderVideoListEndpoint } from "../videoarea/useFavoriteVideoFolderVideoListEndpoint";

export function useFavoriteVideoFolderSearchText() {

    // 入力中のキーワード
    const [inputKeyword, setInputKeyword] = useState(``);
    // 画面表示用の動画リスト(setter)
    const setDisplayVideoList = SetDisplayVideoListContext.useCtx();
    // フォルダID
    const folderId = useFolderId();
    // 動画一覧
    const { data } = useQueryWrapper<FavoriteVideoListResponseType, FavoriteVideoListResponseDataType>(
        {
            url: useFavoriteVideoFolderVideoListEndpoint(folderId),
            select: (res: FavoriteVideoListResponseType) => {
                return res.data;
            },
            options: {
                enabled: false
            }
        }
    );

    /**
     * 入力値および表示用動画情報を初期化
     */
    function clearInput() {
        setInputKeyword(``);

        if (!data) {
            return;
        }

        setDisplayVideoList(data.item);
    }


    /**
     * 動画一覧のフィルター
     */
    function filterVideoList() {

        if (!data) {
            return;
        }

        // 入力欄が空の場合は動画情報をリセット
        if (!inputKeyword) {
            setDisplayVideoList(data.item);
            return;
        }

        setDisplayVideoList((e) => {

            // 入力したタイトルに一致する動画を取得
            const filterdVideList = data.item.filter((e1) => {

                const title = e1.snippet.title;
                return title.includes(inputKeyword);
            });

            return filterdVideList;
        });
    }

    /**
     * エンターキー押下時イベント
     */
    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            filterVideoList();
        }
    };

    return {
        inputKeyword,
        setInputKeyword,
        clearInput,
        filterVideoList,
        handleKeyPress,
    }
}