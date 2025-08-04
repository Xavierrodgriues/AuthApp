export type RegisterInput = {
    fullname: string,
    email: string,
    password: string,
    confirmPassword: string
}

export type InputProps = {
    regUser: RegisterInput[],
    setRegUser: React.Dispatch<React.SetStateAction<RegisterInput[]>>
}