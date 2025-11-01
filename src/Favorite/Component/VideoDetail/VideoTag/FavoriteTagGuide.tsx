import styled from "styled-components";


const Parent = styled.div`
  font-size: 0.9rem;
  line-height: 1.6;
  color: white;
  margin-top: 8px;
  padding: 0 0 20px 20px;
`;

const GuideTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 6px;
`;

const GuideList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin: 0;
`;

const GuideItem = styled.li`
  margin-bottom: 6px;
`;

export function FavoriteTagGuide() {

    console.log("FavoriteTagGuide render");

    return (
        <Parent>
            <GuideTitle>
                タグの設定方法
            </GuideTitle>
            <GuideList>
                <GuideItem>
                    設定したいタグ名を入力すると、既存のタグがサジェスト表示されます。
                    <br />
                    既存タグを選択して追加ボタンを押下するか、Addをクリックしてから追加ボタン（スマホでは＋アイコン）を押下してください。
                </GuideItem>
                <GuideItem>
                    既存タグから直接選択して設定することもできます。
                </GuideItem>
                <GuideItem>
                    タグの設定後、チェックアイコンをクリックすると設定が確定されます。
                </GuideItem>
            </GuideList>
        </Parent>
    );
}