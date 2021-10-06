export interface ApiClient {
	post: <T>(body: Object) => T
}
