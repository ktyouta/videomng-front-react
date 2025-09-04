import { FavoriteVideoSearchConditionValueProvider } from "./FavoriteVideoSearchConditionValueProvider";
import { FavoriteMain } from "./FavoriteMain";


export function Favorite() {

    console.log("Favorite render");

    return (
        <FavoriteVideoSearchConditionValueProvider>
            <FavoriteMain />
        </FavoriteVideoSearchConditionValueProvider>
    );
}