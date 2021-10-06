import {AuthenticationService} from "../../data/api/authentication-service.data";

export function* authenticationSaga(action: any, authenticationService: AuthenticationService) {
	const response = authenticationService.login(action.login, action.password)
}
