export interface APIClient {
	post: <T>(body: Object) => T
}
