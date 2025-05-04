// 登録リクエスト
export type UpdateUserInfoRequestType = {
    currentPassword: string,
    newPassword: string,
    confirmPassword: string,
}