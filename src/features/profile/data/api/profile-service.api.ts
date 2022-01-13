import { AxiosResponse } from "axios";

import { User } from "../../../../core/model/user.model";

export interface ProfileService {
    getUserInfo: () => Promise<AxiosResponse<User>>;
    setUserInfo: (userInfo: User) => void;
    setPhoto: (photoId: number) => void;
}