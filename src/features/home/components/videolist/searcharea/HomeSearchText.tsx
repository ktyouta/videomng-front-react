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
      outerWidth="auto"
      outerMobileWidth="auto"
      iconWidth="47px"
      iconMobileWidth="38px"
      outerHeight="39px"
      radius="10px"
      style={{
        flex: 1,
        minWidth: 0,
        marginRight: "16px"
      }}
    />
  );
}