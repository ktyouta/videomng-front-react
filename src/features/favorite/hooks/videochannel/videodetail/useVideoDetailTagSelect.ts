import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IsLoginContext } from "../../../../../app/components/QueryApp";
import { tagType } from "../../../../../components/TagsComponent";
import { VIDEO_MNG_PATH } from "../../../../../consts/CommonConst";
import { ROUTER_PATH } from "../../../../../consts/RouterPath";
import ENV from '../../../../../env.json';
import { useAppNavigation } from "../../../../../hooks/useAppNavigation";
import useMutationWrapper from "../../../../../hooks/useMutationWrapper";
import { errResType, resSchema } from "../../../../../hooks/useMutationWrapperBase";
import { getFavoriteVideoTagMaster } from "../../../api/getFavoriteVideoTagMaster";
import { AddToFavoriteRequestType } from "../../../types/videochannel/videodetail/AddToFavoriteRequestType";
import { FavoriteVideoTagResponseType } from "../../../types/videodetail/videotag/FavoriteVideoTagResponseType";
import { FavoriteVideoTagType } from "../../../types/videodetail/videotag/FavoriteVideoTagType";
import { useVideoId } from "./useVideoId";

export function useVideoDetailTagSelect() {
    // 動画ID
    const videoId = useVideoId();
    // ログインフラグ
    const isLogin = IsLoginContext.useCtx();
    // タグマスタ
    const { data: tagMasterList } = getFavoriteVideoTagMaster({
        enabled: isLogin,
        select: (res: FavoriteVideoTagResponseType) => {
            return res.data.map((e: FavoriteVideoTagType) => {
                return {
                    value: e.tagId,
                    label: e.tagName,
                    tagColor: e.tagColor,
                }
            })
        }
    });
    // ルーティング用
    const { appGoBack } = useAppNavigation();
    // タグマスタリスト表示フラグ
    const [isOpenTagMasterList, setIsOpenTagMasterList] = useState(true);
    // セクション表示用タグマスタリスト
    const [displayTagMaster, setDisplayTagMaster] = useState<tagType[]>([]);
    // 選択中のタグ
    const [selectedTagList, setSelectedTagList] = useState<tagType[]>([]);
    // 入力中のキーワード
    const [inputKeyword, setInputKeyword] = useState(``);

    // tagMasterListは非同期取得のため、反映処理がないと取得完了前は表示が空になる
    useEffect(() => {

        if (!tagMasterList) {
            return;
        }

        setDisplayTagMaster(tagMasterList);
    }, [tagMasterList]);

    /**
     * お気に入り登録リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO}`,
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: unknown) => {

            // レスポンスの型チェック
            const resParsed = resSchema().safeParse(res);

            if (!resParsed.success) {
                toast.error(`お気に入り登録に失敗しました。時間をおいて再度お試しください。`);
                return;
            }

            const message = resParsed.data.message;
            if (message) {
                toast.success(message);
            }

            appGoBack(ROUTER_PATH.FAVORITE.ROOT);
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {

            const message = res.response.data.message;
            if (message) {
                toast.error(message);
            }
        },
    });

    /**
     * 動画をお気に入りに登録する
     */
    function submitFavorite() {

        const body: AddToFavoriteRequestType = {
            videoId,
            tagList: selectedTagList.map((tag) => Number(tag.value)),
        }

        // リクエスト送信
        postMutation.mutate(body);
    }

    /**
     * 選択中のタグに追加する
     * @param addTag
     */
    function addTagEditList(addTag: tagType) {

        // 選択中のタグに追加
        setSelectedTagList((e: tagType[]) => {

            const tagInfo = e.find((tag) => tag.label === addTag.label);

            if (tagInfo) {
                return e.map(tag => tag.label === addTag.label ? addTag : tag);
            }
            else {
                return [...e, addTag];
            }
        });
    }

    /**
     * 選択中のタグから削除する
     * @param deleteIndex
     */
    function deleteTagEditList(deleteIndex: number) {

        setSelectedTagList((e: tagType[]) => {
            return e.filter((_, index) => index !== deleteIndex);
        });
    }

    /**
     * タグマスタリスト表示切り替え
     */
    function switchTagMasterList() {
        setIsOpenTagMasterList(!isOpenTagMasterList);
    }

    /**
     * 入力値初期化
     */
    function clearInput() {

        setInputKeyword(``);

        if (!tagMasterList) {
            return;
        }

        setDisplayTagMaster(tagMasterList);
    }

    /**
     * タグマスタリストのフィルター
     */
    function filterTagMasterList() {

        if (!tagMasterList) {
            return;
        }

        // 入力欄が空の場合は動画情報をリセット
        if (!inputKeyword) {
            setDisplayTagMaster(tagMasterList);
            return;
        }

        setDisplayTagMaster(() => {

            // 入力したタイトルに一致するタグを取得
            const filterdTagList = tagMasterList.filter((e1) => {

                const title = e1.label;
                return title.includes(inputKeyword);
            });

            return filterdTagList;
        });
    }

    /**
     * エンターキー押下時イベント
     */
    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            filterTagMasterList();
        }
    };

    return {
        submitFavorite,
        isLogin,
        tagMasterList,
        handleKeyPress,
        clearInput,
        switchTagMasterList,
        addTagEditList,
        deleteTagEditList,
        displayTagMaster,
        selectedTagList,
        isOpenTagMasterList,
        inputKeyword,
        setInputKeyword,
        filterTagMasterList
    }
}
