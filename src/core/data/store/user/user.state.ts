import { User } from "../../../model/user.model";

export type UserState = {
    userInfo: User;
    token: string;
};

export type AuthData = {
    login: string;
    password: string;
};