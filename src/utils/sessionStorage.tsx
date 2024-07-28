const getSessionStorageValue = (key: string): string | null => {
  return sessionStorage.getItem(key);
};

export default getSessionStorageValue;
