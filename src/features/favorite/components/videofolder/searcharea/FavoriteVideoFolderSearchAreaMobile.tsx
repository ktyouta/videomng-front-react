import styled from "styled-components";
import { FolderType } from "../../../types/videolist/FolderType";
import { IconComponent } from "../../../../../components/IconComponent";
import { FaFolder } from 'react-icons/fa';


const Parent = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-left: 6%;
  color: white;
  font-size: 17px;
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

const FilterAreaDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 4%;
  margin-top: 10px;
`;

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

type propsType = {
  folder: FolderType | undefined
}

/**
 * 検索条件エリア
 */
export function FavoriteVideoFolderSearchAreaMobile(props: propsType) {

  console.log("FavoriteVideoFolderSearchAreaMobile render");

  return (
    <Parent>
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
    </Parent>
  );
}