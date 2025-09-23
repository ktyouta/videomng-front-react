import axios from "axios";

export async function downloadCsv(url: string, fileName: string) {

    const res = await axios.get(url, {
        withCredentials: true,
        responseType: "blob",
    });

    const blob = new Blob([res.data], { type: "text/csv" });

    const link = document.createElement("a");

    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
}