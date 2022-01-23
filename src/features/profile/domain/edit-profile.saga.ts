import { AxiosResponse } from 'axios';
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { UpdateSettingsData } from '../../../core/model/profile.model';
import { EVENTS_LIST } from '../../../core/util/analytics.util';
import { logger } from '../../../core/util/logger.util';
import { uploadService } from '../../upload/data/api/impl/upload-service-impl.api';
import { profileService } from '../data/api/impl/profile-service-impl.api';
import { SET_PHOTO, SET_USER_INFO } from '../data/store/edit-profile.actions';

function* setUserInfoSaga(action: ReturnType<typeof SET_USER_INFO.STARTED>): SagaIterator {
    if (typeof action.payload.photo === 'number') {
        const updatedUser = yield call(profileService.setUserInfo, action.payload as UpdateSettingsData);

        if (updatedUser.data) {
            yield put(SET_USER_INFO.COMPLETED(updatedUser.data));
            yield call(logger.log, EVENTS_LIST.UPDATE_INFO, { username: updatedUser.data.username });
        }
    } else {
        const photoIdResponse: AxiosResponse<number> = yield call(uploadService.uploadPhoto, action.payload.photo);

        if (photoIdResponse.data) {
            const updatedUser = yield call(profileService.setUserInfo, {
                ...action.payload,
                photo: photoIdResponse.data,
            });

            if (updatedUser.data) {
                yield put(SET_USER_INFO.COMPLETED(updatedUser.data));
                yield call(logger.log, EVENTS_LIST.UPDATE_INFO, { username: updatedUser.data.username });
            }
        }
    }
}

export function* watchSetUserInfoSaga(): SagaIterator {
    yield takeLatest(SET_USER_INFO.STARTED, setUserInfoSaga);
}

function* setPhotoSaga(action: ReturnType<typeof SET_PHOTO.STARTED>): SagaIterator {
    const photoIdResponse: AxiosResponse<number> = yield call(uploadService.uploadPhoto, action.payload);

    yield call(profileService.setPhoto, photoIdResponse.data);
}

export function* watchSetPhotoSaga(): SagaIterator {
    yield takeLatest(SET_PHOTO.STARTED, setPhotoSaga);
}
