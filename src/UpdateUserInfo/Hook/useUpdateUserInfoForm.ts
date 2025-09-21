import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UpdateUserInfoFormType } from "../Type/UpdateUserInfoForm";
import { updateUserInfoSchema } from "../Schema/updateUserInfoSchema";
import { LoginUserInfoType } from "../../Common/Type/LoginUserInfoType";

export function useUpdateUserInfoForm(loginUserInfo: LoginUserInfoType) {

    return useForm<UpdateUserInfoFormType>({
        resolver: zodResolver(updateUserInfoSchema),
        defaultValues: {
            userName: loginUserInfo.userName ?? ``,
            birthday: {
                year: loginUserInfo.birthday.slice(0, 4) ?? ``,
                month: loginUserInfo.birthday.slice(4, 6) ?? ``,
                day: loginUserInfo.birthday.slice(6, 8) ?? ``
            },
        },
        mode: "onSubmit",
    });
}