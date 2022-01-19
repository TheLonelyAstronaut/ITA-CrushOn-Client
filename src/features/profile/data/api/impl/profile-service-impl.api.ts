import { AxiosResponse } from "axios";

import { CoreAPIClient, coreAPIClient } from "../../../../../core/data/api/core.api";
import { UpdateSettingsData } from "../../../../../core/model/profile.model";
import { User } from "../../../../../core/model/user.model";
import { ProfileService } from "../profile-service.api";


class ProfileServiceImpl implements ProfileService {
    constructor(private coreAPI: CoreAPIClient) {}
    
    getUserInfo = async (): Promise<AxiosResponse<User>> => {
        return this.coreAPI.get<User>('api/v1/user');
    }

    setUserInfo = async (updateUserInfo: UpdateSettingsData) => {
        return this.coreAPI.post<User, UpdateSettingsData>('api/v1/user/update_settings', updateUserInfo);
    }

    setPhoto = async (photoId: number) => {
        this.coreAPI.post<void, { photoId: number }>('api/v1/user/set_photo', { photoId });
    }
}

export const profileService: ProfileService = new ProfileServiceImpl(coreAPIClient);