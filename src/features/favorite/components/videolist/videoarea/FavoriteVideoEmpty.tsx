import { FaRegBookmark, FaSearch } from "react-icons/fa";
import { ROUTER_PATH } from "../../../../../consts/RouterPath";
import { useAppNavigation } from "../../../../../hooks/useAppNavigation";
import { FavoriteVideoStatus } from "../../FavoriteVideoStatus";

type propsType = {
  // お気に入りが未登録か（false のときは絞り込み結果0件）
  isUnregistered: boolean,
}

export function FavoriteVideoEmpty(props: propsType) {

  console.log("FavoriteVideoEmpty render");

  const { appNavigate } = useAppNavigation();

  const title = props.isUnregistered
    ? "まだお気に入り動画がありません"
    : "条件に一致する動画がありません";
  const description = props.isUnregistered
    ? "気になる動画を見つけて、お気に入りに追加しましょう。"
    : "検索条件を変えて、もう一度お試しください。";

  /**
   * 動画を探す画面へ遷移
   */
  function goToSearch() {
    appNavigate(ROUTER_PATH.HOME.ROOT);
  }

  return (
    <FavoriteVideoStatus
      icon={props.isUnregistered ? <FaRegBookmark /> : <FaSearch />}
      title={title}
      description={description}
      actionLabel={props.isUnregistered ? "動画を探す" : undefined}
      onAction={props.isUnregistered ? goToSearch : undefined}
    />
  );
}
