import { useAtomValue, useSetAtom } from "jotai";
import useMutationWrapper from "../../../../Common/Hook/useMutationWrapper";
import { errResType, resSchema, resType } from "../../../../Common/Hook/useMutationWrapperBase";
import useSwitch from "../../../../Common/Hook/useSwitch";
import { UpdateToFavoriteVideoTagReqestType } from "../../../Type/VideoDetail/VideoTag/UpdateToFavoriteVideoTagReqestType";
import { tagType } from "../../../../Common/Component/TagsComponent";
import { UpdateFavoriteVideoTagType } from "../../../Type/VideoDetail/VideoTag/UpdateFavoriteVideoTagType";
import { toast } from "react-toastify";
import { VIDEO_MNG_PATH } from "../../../../Common/Const/CommonConst";
import { useFavoriteTagEndpoint } from "./useFavoriteTagEndpoint";
import { FavoriteVideoTagEditListContext, SetFavoriteVideoTagEditListContext } from "../../../Component/VideoDetail/VideoTag/FavoriteVideoTagEditListProvider";
import { ChangeViewContext } from "../../../Component/VideoDetail/VideoTag/FavoriteTag";
import { useVideoId } from "../useVideoId";



export function useFavoriteTagEditUpdateIcon() {

    // 更新ナビゲーション表示フラグ
    const { flag: isOpenUpdateNav, on: openUpdateNav, off: closeUpdateNav } = useSwitch();
    // タグ編集リスト
    const favoriteVideoTagEditList = FavoriteVideoTagEditListContext.useCtx();
    // 閲覧画面遷移
    const changeView = ChangeViewContext.useCtx();
    // 動画ID
    const videoId = useVideoId();

    /**
     * お気に入り動画タグ更新リクエスト
     */
    const postMutation = useMutationWrapper({
        url: useFavoriteTagEndpoint(videoId),
        method: "PUT",
        // 正常終了後の処理
        afSuccessFn: (res: unknown) => {

            // レスポンスの型チェック
            const resParsed = resSchema().safeParse(res);

            if (!resParsed.success) {
                toast.error(`タグの設定に失敗しました。時間をおいて再度お試しください。`);
                return;
            }

            toast.success(`タグを設定しました。`);
            // 閲覧画面に遷移する
            changeView();
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

        if (!videoId) {
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