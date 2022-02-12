import { ApiOkResponse, create } from 'apisauce';
import { store, getFromCache } from '../utility/cache';
import { getToken } from '../auth/storage';

export const apiClient = create({
  baseURL: 'http://192.168.0.16:9000/api'
});

apiClient.addAsyncRequestTransform(async request => {
  const authToken = await getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    store(url, response.data as object);
    return response;
  }

  const data = await getFromCache(url);
  return data ? { ok: true, data } as ApiOkResponse<unknown> : response;
}
