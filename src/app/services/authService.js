export default {
  attemptLogin(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'test' && password === 'test') {
          resolve({ status_code: 200, message: 'Login successful' });
        } else {
          reject(new Error({ description: 'Invalid credentials' }));
        }
      }, 4000);
    });
  },
};
