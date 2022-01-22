import { AxiosResponse } from 'axios';
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { coreAPIClient } from '../../../core/data/api/core.api';
import { AUTHENTICATE } from '../../../core/data/store/user/user.actions';
import { getUserSaga } from '../../../core/domain/user.saga';
import { AuthTokens } from '../../../core/model/auth.model';
import { logger } from '../../../core/util/logger.util';
import { navigationService } from '../../../core/util/navigation-container.util';
import { tokenRepository } from '../../../core/util/token-repository.util';
import { profileService } from '../../profile/data/api/impl/profile-service-impl.api';
import { uploadService } from '../../upload/data/api/impl/upload-service-impl.api';
import { registrationService } from '../data/api/impl/registration-service-impl.api';
import { REGISTRATION } from '../data/store/registration.actions';

export function* registrationSaga(action: ReturnType<typeof REGISTRATION.SEND_REGISTRATION_DATA>): SagaIterator {
    const response: AxiosResponse<AuthTokens> = yield call(registrationService.register, action.payload);
    if (response.data) {
        yield call(coreAPIClient.setToken, response.data.authorizationToken);
        yield call(tokenRepository.saveAuthTokenToStorage, response.data.authorizationToken);
        yield call(tokenRepository.saveRefreshTokenToStorage, response.data.refreshToken);

        yield call(navigationService.navigate, 'Photo');
    } else {
        logger.log('FAILED TO REGISTER', response.status);
    }
}
export function* watchRegistrationSaga(): SagaIterator {
    yield takeLatest(REGISTRATION.SEND_REGISTRATION_DATA, registrationSaga);
}

export function* setPhotoRegistrationSaga(action: ReturnType<typeof REGISTRATION.SET_PHOTO>): SagaIterator {
    const photoIdResponse: AxiosResponse<number> = yield call(uploadService.uploadPhoto, action.payload);

    if (photoIdResponse.data) {
        yield call(profileService.setPhoto, photoIdResponse.data);
    }

    yield call(getUserSaga);
    yield put(AUTHENTICATE.LOGIN());
}
export function* watchSetPhotoRegistrationSaga(): SagaIterator {
    yield takeLatest(REGISTRATION.SET_PHOTO, setPhotoRegistrationSaga);
}
