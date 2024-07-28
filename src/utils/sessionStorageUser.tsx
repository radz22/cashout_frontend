export const getSessionUserData = (key: string): object | null => {
  const item = sessionStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};
