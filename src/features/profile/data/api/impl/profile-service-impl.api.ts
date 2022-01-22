import { AxiosResponse } from 'axios';

import { CoreAPIClient, coreAPIClient } from '../../../../../core/data/api/core.api';
import { UpdateSettingsData } from '../../../../../core/model/profile.model';
import { User } from '../../../../../core/model/user.model';
import { ProfileService } from '../profile-service.api';

class ProfileServiceImpl implements ProfileService {
    constructor(private coreAPI: CoreAPIClient) {}

    getUserInfo = async (id?: number): Promise<AxiosResponse<User>> => {
        return this.coreAPI.get<User>(`api/v1/user${id ? `/${id}` : ''}`);
    };

    setUserInfo = async (updateUserInfo: UpdateSettingsData) => {
        return this.coreAPI.post<User, UpdateSettingsData>('api/v1/user/update_settings', updateUserInfo);
    };

    setPhoto = async (photoId: number) => {
        return this.coreAPI.post<void, { photoId: number }>('api/v1/user/set_photo', { photoId });
    };

    setFirebaseToken = async (firebaseToken: string) => {
        return this.coreAPI.post('api/v1/user/set_firebase_token', { firebaseToken });
    };
}

export const profileService: ProfileService = new ProfileServiceImpl(coreAPIClient);
