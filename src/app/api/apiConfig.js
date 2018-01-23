import environmentHelper from '../utils/environmentHelper';

const apiConfig = {
  apiUrl: environmentHelper.getHost(),
  authToken: '',
  contentType: 'application/json',
  formData: 'multipart/form-data',
};

export default apiConfig;
