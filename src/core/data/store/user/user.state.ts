import { User } from "../../../model/user.model";

export type UserState = {
    userInfo: User | undefined;
    isAuthenticated: boolean;
};
