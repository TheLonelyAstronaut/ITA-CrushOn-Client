import { AxiosResponse } from 'axios';
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { uploadService } from '../../upload/data/api/impl/upload-service-impl.api';
import { profileService } from '../data/api/impl/profile-service-impl.api';
import { SET_PHOTO, SET_USER_INFO } from "../data/store/edit-profile.actions";


function* setUserInfoSaga(action: ReturnType<typeof SET_USER_INFO.STARTED>): SagaIterator {
    yield call(profileService.setUserInfo, action.payload);
    yield put(SET_USER_INFO.COMPLETED(action.payload));
}
export function* watchSetUserInfoSaga(): SagaIterator {
    yield takeLatest(SET_USER_INFO.STARTED, setUserInfoSaga);
}




function* setPhotoSaga(action: ReturnType<typeof SET_PHOTO.STARTED>): SagaIterator {
    
    const photoIdResponse: AxiosResponse<number> = yield call(uploadService.uploadPhoto, action.payload);

    yield call(profileService.setPhoto, photoIdResponse.data);
    //yield put(SET_PHOTO.COMPLETED());
}
export function* watchSetPhotoSaga(): SagaIterator {
    yield takeLatest(SET_PHOTO.STARTED, setPhotoSaga);
}