import { useAtom, useAtomValue } from "jotai";
import { useState } from "react";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";
import { HomeVideoCommentThreadResponseType } from "../Type/HomeVideoCommentThreadResponseType";
import { homeVideoCommentListAtom, videoIdAtom } from "../Atom/HomeAtom";


export function useHomeCommentList() {

    // コメント情報
    const [homeVideoCommentList, setHomeVideoCommentList] = useAtom(homeVideoCommentListAtom);
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // お気に入り動画ID
    const videoId = useAtomValue(videoIdAtom);


    // コメント情報を取得
    const { isLoading } = useQueryWrapper<HomeVideoCommentThreadResponseType>(
        {
            url: `${VIDEO_MNG_PATH}${ENV.VIDEO_COMMENT_ID}/${videoId}`,
            afSuccessFn: (response: HomeVideoCommentThreadResponseType) => {

                const items = response.data.items;
                setHomeVideoCommentList(items);
            },
            afErrorFn: (res) => {
                setErrMessage(`コメントの取得に失敗しました。`);
            }
        }
    );

    return {
        isLoading,
        errMessage,
        homeVideoCommentList,
    }
}