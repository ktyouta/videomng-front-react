import { useEffect, useState } from "react";

export function useBackToTopIcon() {

    // アイコン表示フラグ
    const [isDisplayIcon, setIsDisplayIcon] = useState(false);


    useEffect(() => {

        function toggleDisplay() {

            if (window.scrollY > 300) {
                setIsDisplayIcon(true);
            } else {
                setIsDisplayIcon(false);
            }
        };

        window.addEventListener("scroll", toggleDisplay);

        return () => {
            window.removeEventListener("scroll", toggleDisplay);
        };

    }, []);

    /**
     * トップに戻る
     */
    function backToTop() {

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return {
        isDisplayIcon,
        backToTop
    };
}