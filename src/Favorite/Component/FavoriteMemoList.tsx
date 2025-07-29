import styled from "styled-components";
import { useFavoriteMemoList } from "../Hook/useFavoriteMemoList";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import { FavoriteMemoContent } from "./FavoriteMemoContent";
import LoadingBase from "../../Common/Component/LoadingBase";
import Loading from "../../Common/Component/Loading";


const Parent = styled.div`
  width: 100%;
  height: 90%;
  box-sizing: border-box;
  padding-left: 2%;
  padding-top: 2%;
  padding-right: 2%;
  color:white;
`;

const LoadingParent = styled(Parent)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MemoListAreaDiv = styled.div`
  width: 97%;
  height: 90%;
  overflow: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 2% 1% 1% 1%;
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