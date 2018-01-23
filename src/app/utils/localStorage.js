import cookieService from './cookieStorage';

const storage = window.localStorage;
const testLocalStorage = () => {
  try {
    storage.setItem('storage.test', true);
    storage.removeItem('storage.test');
    return true;
  } catch (_error) {
    return false;
  }
};
const hasLocalStorage = testLocalStorage();
const storageManager = {
  save(key, object) {
    if (hasLocalStorage) {
      storage.setItem(key, JSON.stringify(object));
    } else {
      cookieService.setItem(key, JSON.stringify(object));
    }
  },
  get(key) {
    const value = hasLocalStorage ?
      storage.getItem(key) : cookieService.getItem(key);

    return value && JSON.parse(value);
  },
  remove(key) {
    return hasLocalStorage ?
      storage.removeItem(key) : cookieService.removeItem(key);
  },
};

export default storageManager;
