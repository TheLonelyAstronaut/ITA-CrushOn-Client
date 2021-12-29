import { User } from "../../../model/user.model";

export type UserState = {
    user: User;
    token: string;
};

export type AuthData = {
    login: string;
    password: string;
};