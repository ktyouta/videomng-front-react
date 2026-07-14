import { useState } from "react";
import { toast } from "react-toastify";
import { IsLoginContext } from "../../../../app/components/QueryApp";
import { VIDEO_MNG_PATH } from "../../../../consts/CommonConst";
import { ROUTER_PATH } from "../../../../consts/RouterPath";
import ENV from '../../../../env.json';
import { useAppNavigation } from "../../../../hooks/useAppNavigation";
import { mediaQuery, useMediaQuery } from "../../../../hooks/useMediaQuery";
import useMutationWrapper from "../../../../hooks/useMutationWrapper";
import { errResType, resSchema } from "../../../../hooks/useMutationWrapperBase";
import { getTagMaster } from "../../api/getTagMaster";
import { AddToFavoriteRequestType } from "../../types/videodetail/AddToFavoriteRequestType";
import { TagMasterType } from "../../types/videodetail/TagMasterType";
import { useVideoId } from "./useVideoId";

export function useHomeVideoDetailTagSelect() {
    // 動画ID
    const videoId = useVideoId();
    // ログインフラグ
    const isLogin = IsLoginContext.useCtx();
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);
    // タグマスタ
    const { data: tagMasterList } = getTagMaster({
        enabled: isLogin,
        select: (data) => {
            const tagMasterList = data.data;
            setDisplayTagMaster(tagMasterList);
            return tagMasterList;
        }
    });
    // ルーティング用
    const { appGoBack } = useAppNavigation();
    // セクション表示用タグマスタリスト
    const [displayTagMaster, setDisplayTagMaster] = useState<TagMasterType[]>([]);
    // 入力中のキーワード
    const [inputKeyword, setInputKeyword] = useState(``);
    // 選択中のタグ
    const [selectedTagList, setSelectedTagList] = useState(new Map<number, TagMasterType>());


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

            appGoBack(ROUTER_PATH.HOME.ROOT);
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
            tagList: [...selectedTagList.values()].map((e) => e.tagId),
        }

        // リクエスト送信
        postMutation.mutate(body);
    }

    /**
     * 選択中のタグへの追加・解除を切り替える
     * @param tag
     */
    function toggleTagEditList(tag: TagMasterType) {

        const tagId = tag.tagId;
        setSelectedTagList((e) => {
            const newMap = new Map(e);
            if (newMap.has(tagId)) {
                newMap.delete(tagId);
            }
            else {
                newMap.set(tagId, tag);
            }
            return newMap;
        });
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
                const title = e1.tagName;
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
        isMobile,
        tagMasterList,
        handleKeyPress,
        clearInput,
        toggleTagEditList,
        displayTagMaster,
        inputKeyword,
        setInputKeyword,
        filterTagMasterList,
        selectedTagList
    }
}