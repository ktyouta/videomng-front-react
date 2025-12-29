import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { LoginUserInfoContext, SetLoginUserInfoContext } from '../../../app/components/QueryApp';
import { PREV_PATH_KEY, VIDEO_MNG_PATH } from '../../../consts/CommonConst';
import { ROUTER_PATH } from '../../../consts/RouterPath';
import ENV from '../../../env.json';
import { useCreateYearList } from '../../../hooks/useCreateYearList';
import useMutationWrapper from '../../../hooks/useMutationWrapper';
import { errResType, resSchema } from '../../../hooks/useMutationWrapperBase';
import useSwitch from '../../../hooks/useSwitch';
import { getPrevPath } from '../../../utils/CommonFunction';
import { loginResponseSchema } from '../../login/schemas/loginResponseSchema';
import { UpdateUserInfoRequestType } from '../types/UpdateUserInfoRequestType';
import { useUpdateUserInfoForm } from './useUpdateUserInfoForm';


export function useUpdateUserInfo() {

    // ルーティング用
    const navigate = useNavigate();
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // ログインユーザー情報
    const loginUserInfo = LoginUserInfoContext.useCtx();
    // ログインユーザー情報(setter)
    const setLoginUserInfo = SetLoginUserInfoContext.useCtx();
    // 年リスト
    const yearCoomboList = useCreateYearList();
    // 確認モーダルの表示フラグ
    const { flag: isOpenModal, on: openModal, off: closeModal } = useSwitch();
    // フォーム
    const { register, handleSubmit, formState: { errors } } = useUpdateUserInfoForm(loginUserInfo);
    // 前画面のパスを取得
    const prev = getPrevPath(PREV_PATH_KEY, ROUTER_PATH.HOME.ROOT);


    /**
     * 更新リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${VIDEO_MNG_PATH}${ENV.FRONT_USER_INFO}/${loginUserInfo.userId}`,
        method: "PUT",
        // 正常終了後の処理
        afSuccessFn: (res: unknown) => {

            // レスポンスの型チェック
            const resParsed = resSchema(loginResponseSchema).safeParse(res);

            if (!resParsed.success) {
                toast.error(`ユーザー情報を更新できませんでした。時間をおいて再度お試しください。`);
                closeModal();
                return;
            }

            const resData = resParsed.data.data;

            toast.success("ユーザー情報を更新しました。");
            setLoginUserInfo(resData.userInfo);
            navigate(prev);
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {

            const errMessage = res.response.data.message;

            closeModal();
            //エラーメッセージを表示
            setErrMessage(`${errMessage}`);
        },
    });


    // 保存ボタンクリック時
    const handleSaveClick = handleSubmit((data) => {
        openModal();
    });


    // ユーザー情報更新実行
    const handleConfirm = handleSubmit((data) => {

        const userName = data.userName;
        const userBirthday = `${data.birthday.year}${data.birthday.month}${data.birthday.day}`;

        const body: UpdateUserInfoRequestType = {
            userName,
            userBirthday,
        };

        // 更新リクエスト呼び出し
        postMutation.mutate(body);
        closeModal();
    });


    /**
     * キャンセルボタン押下
     */
    function clickCancel() {
        navigate(prev);
    }

    return {
        errMessage,
        yearCoomboList,
        clickCancel,
        isOpenModal,
        closeModal,
        isLoading: postMutation.isLoading,
        register,
        handleSaveClick,
        handleConfirm,
        errors
    }
}