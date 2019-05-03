const localStorageHandler = {
  getItem,
  setItem,
  removeItem
};

function getItem(key) {
  return JSON.parse(localStorage.getItem(key));
}

function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function removeItem(key, value) {
  localStorage.removeItem(key);
}

export default localStorageHandler;
