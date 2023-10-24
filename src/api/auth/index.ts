import { AxiosApiClientBuilder } from '..';
import { User, Token } from './authType';

const apiClient = new AxiosApiClientBuilder()
	.withResourceName('/v1/auth')
	.withCredentials(true)
	.build();

export const postUserRegister = async (user: User): Promise<Token> => {
	return apiClient.post('/register', user);
};

export const postUserAuth = async (user: User): Promise<Token> => {
	return apiClient.post('/authenticate', user);
};
