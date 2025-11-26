import styled from "styled-components";
import React from "react";
import { FolderType } from "../../../types/videolist/FolderType";
import { IconComponent } from "../../../../../components/IconComponent";
import { FaFolder } from 'react-icons/fa';


const FolderNameDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 13%;
  padding-left: 9%;
  color: white;
  font-size: 24px;
`;

const FilterAreaDiv = styled.div`
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-right: 13%;
  padding-left: 9%;
`;

const IconAreaDiv = styled.div`
  width: 46px;
  height: 100%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 15%;
  border-bottom-right-radius: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  color:#9e9e9e;
  margin-right: 10px;
`;

const SelectedTagAreaDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 13%;
  padding-left: 9%;
  margin-top:1%;
`;

type propsType = {
  folder: FolderType | undefined
}

/**
 * 検索条件エリア
 */
export function FavoriteVideoFolderSearchAreaPc(props: propsType) {

  console.log("FavoriteVideoFolderSearchAreaPc render");

  return (
    <React.Fragment>
      <FolderNameDiv>
        <IconAreaDiv>
          <IconComponent
            icon={FaFolder}
            size="70%"
            style={{
              color: `rgb(144, 202, 249)`
            }}
          />
        </IconAreaDiv>
        {props.folder?.name}
      </FolderNameDiv>
      <FilterAreaDiv>
      </FilterAreaDiv>
      <SelectedTagAreaDiv>
      </SelectedTagAreaDiv>
    </React.Fragment>
  );
}