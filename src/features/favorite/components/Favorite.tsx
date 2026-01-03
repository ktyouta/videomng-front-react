import { Route, Routes } from "react-router-dom";
import { ROUTER_PATH } from "../../../consts/RouterPath";
import { NotFound } from "../../notfound/components/NotFound";
import { FavoriteVideoSearchConditionValueProvider } from "./FavoriteVideoSearchConditionValueProvider";
import { Channel } from "./videochannel/Channel";
import { VideoDetail } from "./videochannel/videodetail/VideoDetail";
import { FavoriteVideoDetail } from "./videodetail/FavoriteVideoDetail";
import { FavoriteVideoFolder } from "./videofolder/FavoriteVideoFolder";
import { FavoriteVideoList } from "./videolist/FavoriteVideoList";


export function Favorite() {

    console.log("Favorite render");

    return (
        <Routes>
            {/* お気に入り動画一覧 */}
            <Route
                path={`/`}
                element={
                    <FavoriteVideoSearchConditionValueProvider>
                        <FavoriteVideoList />
                    </FavoriteVideoSearchConditionValueProvider>
                }
            >
            </Route>
            {/* お気に入り動画詳細 */}
            <Route
                path={`${ROUTER_PATH.FAVORITE.DETAIL}/:videoId/*`}
                element={
                    <FavoriteVideoDetail />
                } >
            </Route>
            {/* お気に入り動画フォルダー */}
            <Route
                path={`${ROUTER_PATH.FAVORITE.FOLDER}/:folderId/*`}
                element={
                    <FavoriteVideoFolder />
                } >
            </Route>
            {/* チャンネル動画一覧 */}
            <Route
                path={`${ROUTER_PATH.FAVORITE.CHANNEL}/:channelId/*`}
                element={
                    <Channel />
                }
            />
            {/* お気に入り動画詳細(未登録) */}
            <Route
                path={`${ROUTER_PATH.FAVORITE.DETAIL_NON_FAVORITE}/:videoId/*`}
                element={
                    <VideoDetail />
                } >
            </Route>
            {/* Not Found */}
            <Route
                key={"*"}
                path="*"
                element={
                    <NotFound
                        backUrl={`${ROUTER_PATH.FAVORITE.ROOT}`}
                    />
                }
            />
        </Routes>
    );
}