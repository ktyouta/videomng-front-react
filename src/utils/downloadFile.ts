import axios from "axios";

export async function downloadFile(url: string, fileName: string) {

    const res = await axios.get(url, {
        withCredentials: true,
        responseType: "blob",
    });

    const contentType = res.headers["content-type"] || "text/csv";
    const blob = new Blob([res.data], { type: contentType });

    const link = document.createElement("a");

    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
}