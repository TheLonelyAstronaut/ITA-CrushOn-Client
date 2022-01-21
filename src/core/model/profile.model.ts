import { PhotoPicker } from '../util/upload.util';

export type UpdateSettingsData = {
    bio: string;
    passions: number[];
    photo: number;
};

export type SetUserInfoData = {
    bio: string;
    passions: number[];
    photo: PhotoPicker | number;
};
