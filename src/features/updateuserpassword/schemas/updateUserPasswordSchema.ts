import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


export const updateUserPasswordSchema = z.object({
    currentPassword: z.string()
        .nonempty("現在のパスワードを入力してください"),
    newPassword: z.string()
        .nonempty("新しいパスワードを入力してください")
        .min(3, "新しいパスワードは3文字以上で入力してください")
        .max(30, "新しいパスワードは30文字以内で入力してください"),
    confirmPassword: z.string()
        .nonempty("確認用パスワードを入力してください")
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "確認用パスワードが一致しません",
    path: ["confirmPassword"]
}).refine((data) => data.currentPassword !== data.newPassword, {
    message: "現在のパスワードと同じものは使用できません",
    path: ["newPassword"],
});;