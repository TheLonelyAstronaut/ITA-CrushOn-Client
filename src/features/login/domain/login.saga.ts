import { LoginService } from "../data/api/login-service.api"

export function* loginSaga(action: any, loginService: LoginService) {
	const response = loginService.login(action.login, action.password)
}
