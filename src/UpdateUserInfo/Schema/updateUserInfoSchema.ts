import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


export const updateUserInfoSchema = z.object({
    userName: z.string()
        .min(3, "ユーザー名は3文字以上で入力してください")
        .max(30, "ユーザー名は30文字以内で入力してください")
        .nonempty("ユーザー名を入力してください"),
    birthday: z.object({
        year: z.string().min(1, "年を選択してください"),
        month: z.string().min(1, "月を選択してください"),
        day: z.string().min(1, "日を選択してください"),
    }).refine((b) => b.year && b.month && b.day, {
        message: "年月日をすべて選択してください",
    }),
});