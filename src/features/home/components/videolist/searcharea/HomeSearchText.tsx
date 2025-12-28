import { IoSearch } from "react-icons/io5";
import { TextboxWithButton } from "../../../../../components/TextboxWithButton";
import { useHomeSearchText } from "../../../hooks/videolist/searcharea/useHomeSearchText";


/**
 * 検索条件テキストエリア
 */
export function HomeSearchText() {

  console.log("HomeSearchText render");

  const {
    clickSearchBtn,
    clearInput,
    inputKeyword,
    setInputKeyword, } = useHomeSearchText();

  return (
    <TextboxWithButton
      clear={clearInput}
      icon={IoSearch}
      onClick={clickSearchBtn}
      backgroundColor="#ececec"
      value={inputKeyword}
      onChange={setInputKeyword}
      placeholder="キーワード"
      outerWidth="57%"
      outerMobileWidth="72%"
      iconWidth="47px"
      iconMobileWidth="38px"
      outerHeight="99%"
      style={{
        marginRight: "30px"
      }}
    />
  );
}