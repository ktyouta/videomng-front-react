import React from "react";
import styled from "styled-components";
import { useHomeVideoArea } from "../Hook/useHomeVideoArea";
import LoadingBase from "../../Common/Component/LoadingBase";

const Parent = styled.div`
  width: 100%;
  height: 90%;
`;

export function HomeVideoArea() {

  const {
    videoListItem,
    isLoading } = useHomeVideoArea();

  // ローディング
  if (isLoading) {
    <LoadingBase />;
  }

  return (
    <Parent>

    </Parent>
  );
}