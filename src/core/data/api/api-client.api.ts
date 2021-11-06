export interface APIClient {
    post: <R, T>(body: R) => T;
}
