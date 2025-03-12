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

const TextBoxAreaDiv = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
`;

const SearchIconAreaDiv = styled.div`
  background-color:#FF9900;
  width: 3%;
  height: 37px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 15%;
  border-bottom-right-radius: 15%;
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