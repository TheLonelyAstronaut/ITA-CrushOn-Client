import { RegistrationService } from '../data/api/registration-service.api';

export function* registerSaga(action: any, registrationService: RegistrationService) {
    const response = registrationService.register(action.login, action.password);
}
