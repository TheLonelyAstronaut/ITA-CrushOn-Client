import { UpdateSettingsData } from '../../../../core/model/profile.model';
import { User } from '../../../../core/model/user.model';
import { HTTPResponse } from '../../../../core/util/http-utils.util';

export interface ProfileService {
    getUserInfo: (id?: number) => Promise<HTTPResponse<User>>;
    setUserInfo: (updateUserInfo: UpdateSettingsData) => Promise<HTTPResponse<User>>;
    setPhoto: (photoId: number) => void;
    setFirebaseToken: (token: string) => void;
}
