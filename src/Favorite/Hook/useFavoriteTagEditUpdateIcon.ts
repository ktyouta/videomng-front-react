import { useAtomValue, useSetAtom } from "jotai";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import useSwitch from "../../Common/Hook/useSwitch";
import ENV from "../../env.json";
import { FavoriteVideoDetailCategoryType } from "../Type/FavoriteVideoDetailCategoryType";
import { FavoriteVideoTagType } from "../Type/FavoriteVideoTagType";
import { UpdateFavoriteVideoResponseDataType } from "../Type/UpdateFavoriteVideoResponseDataType";
import { favoriteVideoTagEditListAtom, favoriteVideoTagListAtom } from "../Atom/FavoriteAtom";
import { UpdateToFavoriteVideoTagReqestType } from "../Type/UpdateToFavoriteVideoTagReqestType";
import { tagType } from "../../Common/Component/TagsComponent";
import { UpdateFavoriteVideoTagType } from "../Type/UpdateFavoriteVideoTagType";
import { FavoriteVideoIdContext } from "../Component/Favorite";
import { toast } from "react-toastify";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import { useFavoriteTagEndpoint } from "./useFavoriteTagEndpoint";


type propsType = {
    changeView: () => void,
}

export function useFavoriteTagEditUpdateIcon(props: propsType) {

    // 更新ナビゲーション表示フラグ
    const { flag: isOpenUpdateNav, on: openUpdateNav, off: closeUpdateNav } = useSwitch();
    // タグ編集リスト
    const favoriteVideoTagEditList = useAtomValue(favoriteVideoTagEditListAtom);
    // お気に入り動画ID
    const favoriteVideoId = FavoriteVideoIdContext.useCtx();
    // タグリスト
    const setFavoriteVideoTagList = useSetAtom(favoriteVideoTagListAtom);


    /**
     * お気に入り動画タグ更新リクエスト
     */
    const postMutation = useMutationWrapper({
        url: useFavoriteTagEndpoint(favoriteVideoId),
        method: "PUT",
        // 正常終了後の処理
        afSuccessFn: (res: resType<FavoriteVideoTagType[]>) => {
            setFavoriteVideoTagList(res.data);
            // 閲覧画面に遷移する
            props.changeView();
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {
            toast.error(`タグの更新に失敗しました。`);
        },
    });

    /**
     * お気に入り動画タグ更新
     * @returns 
     */
    function udpateTag() {
        if (!favoriteVideoTagEditList || favoriteVideoTagEditList.length === 0) {
            toast.error(`タグが設定されていません。`);
            return;
        }

        if (!favoriteVideoId) {
            toast.error(`タグを更新できません。`);
            return;
        }

        const body: UpdateToFavoriteVideoTagReqestType = {
            tag: favoriteVideoTagEditList.reduce((prev: UpdateFavoriteVideoTagType[], e: tagType) => {

                const value = e.value;

                if (typeof value === `string` || typeof value === `symbol`) {
                    return prev;
                }

                prev.push({
                    id: value ?? undefined,
                    name: e.label
                });

                return prev;
            }, [])
        }

        // リクエスト送信
        postMutation.mutate(body);
    }

    return {
        isOpenUpdateNav,
        openUpdateNav,
        closeUpdateNav,
        udpateTag,
    }
}