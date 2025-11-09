import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UpdateUserInfoFormType } from "../types/UpdateUserInfoForm";
import { updateUserInfoSchema } from "../schemas/updateUserInfoSchema";
import { LoginUserInfoType } from "../../../types/LoginUserInfoType";

export function useUpdateUserInfoForm(loginUserInfo: LoginUserInfoType) {

    return useForm<UpdateUserInfoFormType>({
        resolver: zodResolver(updateUserInfoSchema),
        defaultValues: {
            userName: loginUserInfo.userName,
            birthday: {
                year: loginUserInfo.birthday.slice(0, 4),
                month: loginUserInfo.birthday.slice(4, 6),
                day: loginUserInfo.birthday.slice(6, 8)
            },
        },
        mode: "onSubmit",
        reValidateMode: "onSubmit",
    });
}