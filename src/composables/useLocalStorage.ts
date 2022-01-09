export default <T>(key: string) => ({
  get: () => {
    const value = localStorage.getItem(key);
    if (value) return JSON.parse(value) as T;
    return undefined;
  },
  set: (value: T) => localStorage.setItem(key, JSON.stringify(value)),
  delete: (key: string) => localStorage.removeItem(key),
});
