import { FaArrowUp } from "react-icons/fa";
import { TextboxWithButton } from "../../../../../components/TextboxWithButton";
import { mediaQuery, useMediaQuery } from "../../../../../hooks/useMediaQuery";
import { useFavoriteMemoCreateInput } from "../../../hooks/videodetail/videomemo/useFavoriteMemoCreateInput";

// テキストボックスの高さ（モバイル/それ以外）
const TEXTBOX_HEIGHT_MOBILE = "33px";
const TEXTBOX_HEIGHT_DEFAULT = "37px";

export function FavoriteMemoCreateInput() {

  console.log("FavoriteMemoCreateInput render");

  const {
    inputMemo,
    setInputMemo,
    addToMemo,
    clearInputMemo,
  } = useFavoriteMemoCreateInput();

  // 画面サイズ判定
  const isMobile = useMediaQuery(mediaQuery.mobile);

  return (
    <TextboxWithButton
      clear={clearInputMemo}
      icon={FaArrowUp}
      onClick={addToMemo}
      backgroundColor="#ececec"
      value={inputMemo}
      onChange={setInputMemo}
      placeholder="メモ"
      outerWidth="96%"
      outerMobileWidth="96%"
      iconWidth="37px"
      iconMobileWidth="34px"
      outerHeight={isMobile ? TEXTBOX_HEIGHT_MOBILE : TEXTBOX_HEIGHT_DEFAULT}
      style={{
        marginRight: "auto",
        marginLeft: "auto",
      }}
      iconSize={isMobile ? "20px" : ""}
    />
  );
}