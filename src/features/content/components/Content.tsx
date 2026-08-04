import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { ROUTER_PATH } from "../../../consts/RouterPath";
import { mediaQuery, useMediaQuery } from "../../../hooks/useMediaQuery";
import { Favorite } from "../../favorite/components/Favorite";
import { Home } from "../../home/components/Home";
import { NotFound } from "../../notfound/components/NotFound";
import { useContent } from "../hooks/useContent";
import { BackToTopIcon } from "./BackToTopIcon";

// ヘッダーの高さ（モバイル/それ以外）
const HEADER_HEIGHT_MOBILE = "80px";
const HEADER_HEIGHT_DEFAULT = "153px";

const Parent = styled.div<{ isMobile: boolean }>`
  width: 100%;
  box-sizing: border-box;
  flex: 1;
  padding-top:${({ isMobile }) => (isMobile ? HEADER_HEIGHT_MOBILE : HEADER_HEIGHT_DEFAULT)};
`;

export function Content() {

    console.log("Content render");

    const {
        isLogin,
        isCheckedAuth } = useContent();

    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);

    return (
        <Parent
            isMobile={isMobile}
        >
            <Routes>
                <Route
                    path={`${ROUTER_PATH.HOME.ROOT}/*`}
                    element={
                        <Home />
                    }
                />
                {
                    isLogin &&
                    <Route
                        path={`${ROUTER_PATH.FAVORITE.ROOT}/*`}
                        element={
                            <Favorite />
                        }
                    />
                }
                {
                    isCheckedAuth &&
                    <Route
                        key={"*"}
                        path="*"
                        element={
                            <NotFound
                                backUrl={`${ROUTER_PATH.HOME.ROOT}`}
                            />
                        }
                    />
                }
            </Routes>
            <BackToTopIcon />
        </Parent>
    );
}