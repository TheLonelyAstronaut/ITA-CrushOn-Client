import { AxiosResponse } from "axios";

import { CoreAPIClient, coreAPIClient } from "../../../../../core/data/api/core.api";
import { User } from "../../../../../core/model/user.model";
import { ProfileService } from "../profile-service.api";


class ProfileServiceImpl implements ProfileService {
    constructor(private coreAPI: CoreAPIClient) {}
    
    getUserInfo = async (): Promise<AxiosResponse<User>> => {
        return this.coreAPI.get<User>('api/v1/user');
    }

    setUserInfo = async (userInfo: User) => {
        this.coreAPI.post<void, User>('api/v1/user/update_settings', userInfo);
    }

    setPhoto = async (photoId: number) => {
        this.coreAPI.post<void, { photoId: number }>('api/v1/user/set_photo', { photoId });
    }
}

export const profileService: ProfileService = new ProfileServiceImpl(coreAPIClient);