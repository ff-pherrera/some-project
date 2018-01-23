const env = {
  local: /http(s?):\/\/localhost/.test(location.origin),
  live: /http(s?):\/\/business/.test(location.origin),
  liveAlter: /http(s?):\/\/contribution/.test(location.origin),
};
const environmentHelper = {
  getHost() {
    return env.local ? 'http://localhost:8080/status-one/api/v1/' : `${location.origin}:8443/status-one/api/v1/`;
  },
  isLiveEnvironment() {
    return env.live || env.liveAlter;
  },
};

export default environmentHelper;
