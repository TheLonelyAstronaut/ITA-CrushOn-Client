import { createAction } from '@reduxjs/toolkit';

import { SetUserInfoData } from '../../../../core/model/profile.model';
import { User } from '../../../../core/model/user.model';
import { PhotoPicker } from '../../../../core/util/upload.util';

export const SET_USER_INFO = {
    STARTED: createAction<SetUserInfoData>('[Set user info] started'),
    COMPLETED: createAction<User>('[Set user info] completed'),
};

export const SET_PHOTO = {
    STARTED: createAction<PhotoPicker>('[Set photo] started'),
    COMPLETED: createAction<PhotoPicker>('[Set photo] completed'),
};
