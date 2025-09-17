import { useRef } from "react";

export function useQueryParams() {

    const searchParams = new URLSearchParams(window.location.search);
    const paramsRef = useRef<Record<string, string>>({});

    if (Object.keys(paramsRef.current).length === 0) {

        searchParams.forEach((value, key) => {
            paramsRef.current[key] = value;
        });
    }

    return paramsRef.current;
}