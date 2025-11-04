import styled from "styled-components";
import { useFavoriteMemoList } from "../../../Hook/VideoDetail/VideoMemo/useFavoriteMemoList";
import { FavoriteVideoMemoType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoType";
import { FavoriteMemoContent } from "./FavoriteMemoContent";
import LoadingBase from "../../../../Common/Component/LoadingBase";
import Loading from "../../../../Common/Component/Loading";


const Parent = styled.div`
  width: 100%;
  flex: 1;
  box-sizing: border-box;
  color:white;
  display: flex;
  flex-direction: column;
  min-height: 0;
  padding-top: 20px;
`;

const LoadingParent = styled(Parent)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MemoListAreaDiv = styled.div`
  width: 99%;
  height: 95%;
  overflow: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 0 20px 0 9px;
`;


export function FavoriteMemoList() {

    console.log("FavoriteMemoList render");

    const {
        isLoading,
        favoriteVideoMemoList,
        errMessage, } = useFavoriteMemoList();

    if (isLoading) {
        return (
            <LoadingParent>
                <Loading />
            </LoadingParent>
        );
    }

    if (!favoriteVideoMemoList) {
        return (
            <LoadingParent>
                <Loading />
            </LoadingParent>
        );
    }

    if (errMessage) {
        return (
            <Parent>
                {errMessage}
            </Parent>
        );
    }

    return (
        <Parent>
            {
                favoriteVideoMemoList.length > 0
                    ?
                    <MemoListAreaDiv>
                        {
                            favoriteVideoMemoList.map((e: FavoriteVideoMemoType) => {

                                const memoId = e.videoMemoSeq

                                return (
                                    <FavoriteMemoContent
                                        favoriteVideoMemo={e}
                                        key={memoId}
                                    />
                                )
                            })
                        }
                    </MemoListAreaDiv>
                    :
                    `メモが登録されていません。`
            }
        </Parent>
    );
}