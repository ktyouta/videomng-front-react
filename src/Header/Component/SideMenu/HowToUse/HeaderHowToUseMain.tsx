import styled from "styled-components";
import ComboComponent, { comboType } from "../../../../Common/Component/ComboComponent";
import { VideoCategoryItemType } from "../../../../Main/Type/VideoCategoryItemType";


const Parent = styled.div`
    width: 100%;
    height: 87%;
    box-sizing: border-box;
    color: white;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
`;

const MessageOl = styled.ol`

`;

const MessageLi = styled.li`
  margin-bottom: 6%;
  display: flex;
  align-items: flex-start;
`;

const StepSpan = styled.span`
  color: white;
  font-weight: bold;
  margin-right: 0.75rem;
`;

export function HeaderHowToUseMain() {

    console.log("HeaderHowToUseMain render");

    return (
        <Parent>
            <MessageOl>
                <MessageLi>
                    <StepSpan>
                        1
                    </StepSpan>
                    ホーム画面でキーワードを入力し、動画を検索します。
                </MessageLi>
                <MessageLi>
                    <StepSpan>
                        2
                    </StepSpan>
                    気になる動画を選択すると、詳細画面に遷移します。
                </MessageLi>
                <MessageLi>
                    <StepSpan>
                        3
                    </StepSpan>
                    詳細画面から「お気に入り」に登録できます（ログインが必要）。
                </MessageLi>
                <MessageLi>
                    <StepSpan>
                        4
                    </StepSpan>
                    お気に入り登録後、「お気に入り」画面から設定の変更が可能です。
                </MessageLi>
            </MessageOl>
        </Parent>
    );
}