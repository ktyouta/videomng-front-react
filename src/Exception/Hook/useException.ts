import { useNavigate } from "react-router-dom";
import { HOME_ROOT_PATH } from "../../Home/Const/HomeConst";
import { useErrorBoundary } from "react-error-boundary";

export function useException() {

    // ルーティング用
    const navigate = useNavigate();
    // ErrorBoundaryリセット用
    const { resetBoundary } = useErrorBoundary();

    /**
     * ホームに戻る
     */
    function backHome() {
        resetBoundary();
        navigate(`${HOME_ROOT_PATH}`);
    }

    return {
        backHome
    };
}