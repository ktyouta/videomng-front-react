import styled from "styled-components";
import { IconComponent } from "../../../../Common/Component/IconComponent";
import { RxCross1 } from "react-icons/rx";

const WordDiv = styled.div`
  display:flex;
  align-items: center;
`;

const WordSpan = styled.span`
    cursor:pointer;
    &:hover {
        color:#2563eb;
    }
`;

const IconDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width:15px;
  margin-left:3px;
  &:hover {
    transform: scale(1.3);
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
                    onclick={() => {
                        props.deleteKeyword(props.keyword)
                    }}
                />
            </IconDiv>
        </WordDiv>

    );
}