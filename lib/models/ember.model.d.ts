export interface IEmberConfig {
    secret: string;
}
export interface IEmberRequest {
    inputText: string | undefined;
    secret: string;
    fid?: string | undefined;
    username?: string;
}
export interface IEmberResponse {
    status: string;
    message: string;
    sign_tx_url: string | null;
}
