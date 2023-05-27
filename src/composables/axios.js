import axios from 'axios';

export function useAxios(request = {}) {
  const url = request.url || null;
  const method = request.method || 'GET';
  const headers = request.headers || {};
  const params = request.params || {};
  const data = request.data || {};

  return axios.request({
    url,
    method,
    headers,
    params,
    data,
  });
}
