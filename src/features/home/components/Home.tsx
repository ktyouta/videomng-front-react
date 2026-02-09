import { Route, Routes } from "react-router-dom";
import { ROUTER_PATH } from "../../../consts/RouterPath";
import { NotFound } from "../../notfound/components/NotFound";
import { HomeChannel } from "./videochannel/HomeChannel";
import { HomeVideoDetail } from "./videodetail/HomeVideoDetail";
import { HomeVideoList } from "./videolist/HomeVideoList";


export function Home() {

    console.log("Home render");

    return (
        <Routes>
            {/* 動画一覧 */}
            <Route
                path={`/`}
                element={
                    <HomeVideoList />
                }
            />
            {/* 動画詳細 */}
            <Route
                path={`${ROUTER_PATH.HOME.DETAIL}/:videoId/*`}
                element={
                    <HomeVideoDetail />
                }
            />
            {/* チャンネル動画一覧 */}
            <Route
                path={`${ROUTER_PATH.HOME.CHANNEL}/:channelId/*`}
                element={
                    <HomeChannel />
                }
            />
            {
                // Not Found
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
    );
}