import { apiClient } from './client';

export const register = (pushToken: string) =>  apiClient.post('/expoPushTokens', { token: pushToken });
