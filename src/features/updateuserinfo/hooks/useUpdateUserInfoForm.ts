import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginUserInfoType } from "../../../types/userinfo/LoginUserInfoType";
import { updateUserInfoSchema } from "../schemas/updateUserInfoSchema";
import { UpdateUserInfoFormType } from "../types/UpdateUserInfoForm";

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