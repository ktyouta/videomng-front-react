import { RxCross1 } from "react-icons/rx";
import styled from "styled-components";
import { IconComponent } from "../../../../../../components/IconComponent";
import { MEDIA } from "../../../../../../consts/MediaConst";
import {
    HOME_SEARCH_AREA_BUTTON_BG,
    HOME_SEARCH_AREA_BUTTON_HOVER_BG,
} from "../../../../const/HomeConst";

const WordDiv = styled.div`
  display:flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px 8px 16px;
  border-radius: 20px;
  background-color: ${HOME_SEARCH_AREA_BUTTON_BG};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${HOME_SEARCH_AREA_BUTTON_HOVER_BG};
  }
`;

const WordSpan = styled.span`
    color: white;
    font-size: 15px;
    cursor:pointer;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
      font-size: 17px;
    }

    @media (min-width: ${MEDIA.PC}) {
      font-size: 17px;
    }
`;

const IconDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width:16px;
  &:hover {
    transform: scale(1.15);
  }
`;

type propsType = {
    keyword: string,
    clickKeyword: (keyword: string) => void,
    deleteKeyword: (keyword: string) => void,
}

export function HomeHistoryWord(props: propsType) {

    return (
        <WordDiv>
            <WordSpan
                onClick={() => {
                    props.clickKeyword(props.keyword);
                }}
            >
                {props.keyword}
            </WordSpan>
            <IconDiv>
                <IconComponent
                    icon={RxCross1}
                    size="60%"
                    bgColor="white"
                    onclick={() => {
                        props.deleteKeyword(props.keyword)
                    }}
                />
            </IconDiv>
        </WordDiv>

    );
}