export type User = {
	email: string;
    username?: string;
	password: string;
};

export type AuthenticateResponse = {
    token?: string;
    message?: string;
}
