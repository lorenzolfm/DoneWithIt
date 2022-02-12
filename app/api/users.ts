import { User } from '../types';
import { apiClient } from './client'

interface Response {
  data: User;
  error: string;
}

export const register = (userInfo: User) => apiClient.post<Response>('/users', userInfo);
