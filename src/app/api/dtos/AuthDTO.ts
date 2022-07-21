import { UserOutput } from "@/shared/types/interfaces/User";

export interface AuthSignUpReqDTO {
    name: string;
    email: string;
    password: string;
}

export interface AuthSignInReqDTO {
    email: string;
    password: string;
}

export interface AuthSignResDTO {
    user: UserOutput;
    token: string;
}