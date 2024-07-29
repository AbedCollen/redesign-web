import type { FetchInstance, FetchMockOptions } from '@nxweb/core/fetch';
import { createFetch, createFetchURL } from '@nxweb/core/fetch';

import type { PagingInfo } from '@models/types';

export const getApiURL = () => `${window.NX?.env?.BaseUrl}`;

export const apiURL = (endpoint: string, options: PagingInfo = {}) => createFetchURL(endpoint, {
  baseURL: getApiURL(), ...options
});

export const mockAPI = (instance: FetchInstance, options?: FetchMockOptions): FetchInstance => {
  instance.mock({ delayResponse: 1000, ...options || {} }).onAny().passThrough();

  return instance;
};

export const API = createFetch({
  baseURL: getApiURL(),
  headers: {
    Authorization: window.sessionStorage.getItem('token') || ''
  }
});

export const apiFetch = (token: string) => createFetch({
  baseURL: window.NX?.env?.BaseUrl,
  headers: {
    Authorization: token
  }
});
