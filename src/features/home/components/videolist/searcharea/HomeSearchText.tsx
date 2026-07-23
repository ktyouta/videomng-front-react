import { IoSearch } from "react-icons/io5";
import { TextboxWithButton } from "../../../../../components/TextboxWithButton";
import { HOME_SEARCH_AREA_SEARCH_BUTTON_BG } from "../../../const/HomeConst";
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
    setInputKeyword,
    isPcLess } = useHomeSearchText();

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
      iconWidth="50px"
      iconMobileWidth="40px"
      outerHeight="39px"
      radius="10px"
      iconAreaBgColor={HOME_SEARCH_AREA_SEARCH_BUTTON_BG}
      style={{
        flex: 1,
        minWidth: 0,
      }}
      iconSize={isPcLess ? "65%" : "75%"}
    />
  );
}