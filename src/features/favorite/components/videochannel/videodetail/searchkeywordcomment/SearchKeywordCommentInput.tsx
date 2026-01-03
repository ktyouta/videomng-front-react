import { IoSearch } from "react-icons/io5";
import { TextboxWithButton } from "../../../../../../components/TextboxWithButton";
import { useSearchKeywordCommentInput } from "../../../../hooks/videochannel/videodetail/searchkeywordcomment/useSearchKeywordCommentInput";


export function SearchKeywordCommentInput() {

  console.log("SearchKeywordCommentInput render");

  const {
    clickSearchBtn,
    clearInputKeyword,
    inputKeyword,
    setInputKeyword, } = useSearchKeywordCommentInput();

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
      outerHeight="37px"
      style={{
        marginRight: "auto",
        marginLeft: "auto",
      }}
    />
  );
}