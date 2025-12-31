import { api } from "../lib/apiClient";

type ApiCallOptions<T> = {
    method: "POST" | "PUT" | "DELETE";
    url: string;
    body?: T;
    onSuccess?: (res: unknown) => void;
    onError?: (err: unknown) => void;
    onFinally?: () => void;
};


export function callApi<T>({ method, url, body, onSuccess, onError, onFinally }: ApiCallOptions<T>) {

    let req: Promise<unknown>;

    switch (method) {
        case "POST":
            req = api.post(url, body, { withCredentials: true });
            break;
        case "PUT":
            req = api.put(url, body, { withCredentials: true });
            break;
        case "DELETE":
            req = api.delete(url, { data: body, withCredentials: true });
            break;
        default:
            throw new Error(`Unsupported method: ${method}`);
    }

    req
        .then(res => onSuccess?.(res))
        .catch(err => onError?.(err))
        .finally(() => onFinally?.());
}
