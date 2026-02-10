import { toast } from "react-toastify";
import { tagType } from "../../../../../components/TagsComponent";
import useMutationWrapper from "../../../../../hooks/useMutationWrapper";
import { errResType, resSchema } from "../../../../../hooks/useMutationWrapperBase";
import useSwitch from "../../../../../hooks/useSwitch";
import { ChangeViewContext } from "../../../components/videodetail/videotag/FavoriteTag";
import { FavoriteVideoTagEditListContext } from "../../../components/videodetail/videotag/FavoriteVideoTagEditListProvider";
import { UpdateFavoriteVideoTagType } from "../../../types/videodetail/videotag/UpdateFavoriteVideoTagType";
import { UpdateToFavoriteVideoTagReqestType } from "../../../types/videodetail/videotag/UpdateToFavoriteVideoTagReqestType";
import { favoriteTagEndpoint } from "../../../utils/endpoint";
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
        url: favoriteTagEndpoint(videoId),
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

        if (!videoId) {
            toast.error(`タグを更新できません。`);
            return;
        }

        const body: UpdateToFavoriteVideoTagReqestType = {
            tag: favoriteVideoTagEditList.reduce((prev: UpdateFavoriteVideoTagType[], e: tagType) => {

                prev.push({
                    name: e.label,
                    tagColor: e.tagColor,
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