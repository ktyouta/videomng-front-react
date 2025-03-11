import { useSetAtom } from "jotai";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import ENV from "../../env.json";
import { isLoginAtom } from "../../Common/Atom/CommonAtom";


export function useMain() {

    // ログインフラグ
    const setIsLogin = useSetAtom(isLoginAtom);

    // 認証チェック
    useQueryWrapper(
        {
            url: `${VIDEO_MNG_PATH}${ENV.FRONT_USER_CHECK_AUTH}`,
            afSuccessFn: () => {
                setIsLogin(true);
            },
            afErrorFn: (res) => {
                setIsLogin(false);
            }
        }
    );
}