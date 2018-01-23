import axios from 'axios';
import apiConfig from './apiConfig';

axios.defaults.baseURL = apiConfig.apiUrl;
axios.defaults.headers.post['Content-Type'] = apiConfig.contentType;
axios.defaults.headers.put['Content-Type'] = apiConfig.contentType;

axios.interceptors.request.use(config =>
  // TODO: add interceptor request logic here
   config
 );

axios.interceptors.response.use({}, response =>
// TODO: add interceptor response error logic here
   Promise.reject(response)
 );

const apiService = {
  get(endpoint) {
    return axios.get(endpoint);
  },
  getBy(endpoint, id) {
    return axios.get(`${endpoint}${id}`);
  },
  getByCustomUrl(endpoint, customUrl) {
    return axios.get(`${endpoint}${customUrl}`);
  },
  post(endpoint, data) {
    return axios.post(endpoint, data);
  },
  put(endpoint, id, data) {
    return axios.put(`${endpoint}${id}`, data);
  },
  singlePut(endpoint, data) {
    return axios.put(endpoint, data);
  },
  destroy(endpoint, id) {
    return axios.delete(`${endpoint}${id}`);
  },
};

export default apiService;
