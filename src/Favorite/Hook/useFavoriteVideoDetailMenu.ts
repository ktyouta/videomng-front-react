import { useAtom, useAtomValue } from "jotai";
import { isLoginAtom } from "../../Common/Atom/CommonAtom";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import ENV from '../../env.json';
import { FAVORITE_ROOT_PATH, MENU_NO } from "../Const/FavoriteConst";
import { useNavigate } from "react-router-dom";
import useSwitch from "../../Common/Hook/useSwitch";
import { useState } from "react";


type propsType = {
    videoId: string
}


export function useFavoriteVideoDetailMenu(props: propsType) {

    // メニュー番号
    const [openMenuNo, setOpenMenuNo] = useState<MENU_NO>(MENU_NO.NONE);
    // ルーティング用
    const navigate = useNavigate();

    /**
     * モーダルオープン
     * @param mode 
     */
    function openMenuModal(mode: MENU_NO) {
        setOpenMenuNo(mode);
    }

    /**
     * モーダルクローズ
     */
    function closeMenuModal() {
        setOpenMenuNo(MENU_NO.NONE);
    }

    /**
     * モーダル開閉チェック
     * @returns 
     */
    function isOpenModal() {
        return openMenuNo !== MENU_NO.NONE
    }


    /**
     * お気に入り動画削除リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${ENV.PROTOCOL}${ENV.DOMAIN}${ENV.PORT}${ENV.FAVORITE_VIDEO}/${props.videoId}`,
        method: "DELETE",
        // 正常終了後の処理
        afSuccessFn: (res: resType<unknown>) => {

            const message = res.message;
            if (message) {
                alert(message);
            }
            navigate(FAVORITE_ROOT_PATH);
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {
            alert(`動画の削除に失敗しました。`);
        },
    });

    /**
     * お気に入り動画削除
     */
    function deleteFavoriteVide() {

        if (!window.confirm(`この動画をお気に入りから外しもよろしいですか？`)) {
            return;
        }

        // リクエスト送信
        postMutation.mutate();
    }

    return {
        openMenuNo,
        openMenuModal,
        closeMenuModal,
        isOpenModal,
        deleteFavoriteVide,
    }
}