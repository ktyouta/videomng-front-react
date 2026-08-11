import { FaExclamationTriangle } from "react-icons/fa";
import { DANGER_COLOR } from "../../../consts/ButtonInteractionConst";
import { FavoriteVideoStatus } from "./FavoriteVideoStatus";

type propsType = {
  // 再読み込み（データ再取得）
  onReload: () => void,
}

export function FavoriteVideoError(props: propsType) {

  console.log("FavoriteVideoError render");

  return (
    <FavoriteVideoStatus
      icon={<FaExclamationTriangle />}
      iconColor={DANGER_COLOR}
      title="お気に入り動画を取得できませんでした"
      description="通信状態を確認して、もう一度お試しください。"
      actionLabel="再読み込み"
      onAction={props.onReload}
    />
  );
}
