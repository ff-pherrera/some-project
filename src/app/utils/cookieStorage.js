const cookieExpiration = (day) => {
  const expiration = new Date();

  expiration.setTime(expiration.getTime() + (day * 24 * 60 * 60 * 1000));
  return expiration.toUTCString();
};
const cookieService = {
  getItem(name) {
    const match = document.cookie.match(new RegExp(`${name}=([^;]+)`));
    let value = '';

    if (match) {
      value = match[1];
    }
    return value;
  },
  setItem(name, value) {
    const age = cookieExpiration(1);

    document.cookie = `${name}=${value}; expires=${age};`;
  },
  deleteItem(name) {
    const expiration = cookieExpiration(-1);

    document.cookie = `${name}=; expires=${expiration};`;
  },
};

export default cookieService;
