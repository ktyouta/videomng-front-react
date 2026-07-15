import styled from "styled-components";


const Parent = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
  margin-bottom: 2%;
`;

const TitleSpan = styled.div`
  font-weight: bold;
`;

export function VideoDetailTagSelectHeader() {

    return (
        <Parent>
            <TitleSpan>
                タグを設定
            </TitleSpan>
        </Parent>
    );
}
