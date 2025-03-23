import React from "react";
import styled from "styled-components";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import { useFavoriteSearchArea } from "../Hook/useFavoriteSearchArea";
import { IoSearch } from "react-icons/io5";
import { IconComponent } from "../../Common/Component/IconComponent";
import { IconBaseProps } from "react-icons";

const Parent = styled.div`
  width: 100%;
  height: 10%;
`;



/**
 * 検索条件エリア
 */
export function FavoriteSearchArea() {

  console.log("FavoriteSearchArea render");

  return (
    <Parent>

    </Parent>
  );
}