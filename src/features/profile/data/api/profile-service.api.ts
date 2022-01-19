import { AxiosResponse } from "axios";

import { UpdateSettingsData } from "../../../../core/model/profile.model";
import { User } from "../../../../core/model/user.model";

export interface ProfileService {
    getUserInfo: () => Promise<AxiosResponse<User>>;
    setUserInfo: (updateUserInfo: UpdateSettingsData) => Promise<AxiosResponse<User>>;
    setPhoto: (photoId: number) => void;
}