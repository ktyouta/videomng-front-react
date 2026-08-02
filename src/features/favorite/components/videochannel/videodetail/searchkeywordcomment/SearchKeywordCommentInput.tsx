import { IoSearch } from "react-icons/io5";
import { TextboxWithButton } from "../../../../../../components/TextboxWithButton";
import { mediaQuery, useMediaQuery } from "../../../../../../hooks/useMediaQuery";
import { useSearchKeywordCommentInput } from "../../../../hooks/videochannel/videodetail/searchkeywordcomment/useSearchKeywordCommentInput";

// テキストボックスの高さ（モバイル/それ以外）
const TEXTBOX_HEIGHT_MOBILE = "33px";
const TEXTBOX_HEIGHT_DEFAULT = "37px";

export function SearchKeywordCommentInput() {

  console.log("SearchKeywordCommentInput render");

  const {
    clickSearchBtn,
    clearInputKeyword,
    inputKeyword,
    setInputKeyword, } = useSearchKeywordCommentInput();

  // 画面サイズ判定
  const isMobile = useMediaQuery(mediaQuery.mobile);

  return (
    <TextboxWithButton
      clear={clearInputKeyword}
      icon={IoSearch}
      onClick={clickSearchBtn}
      backgroundColor="#ececec"
      value={inputKeyword}
      onChange={setInputKeyword}
      placeholder="キーワード"
      outerWidth="96%"
      outerMobileWidth="96%"
      iconWidth="37px"
      iconMobileWidth="34px"
      outerHeight={isMobile ? TEXTBOX_HEIGHT_MOBILE : TEXTBOX_HEIGHT_DEFAULT}
      style={{
        marginRight: "auto",
        marginLeft: "auto",
      }}
    />
  );
}