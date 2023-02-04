export default () => ({
  get: (key: string) =>
    document.cookie
      .split(';')
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith(`${key}=`))
      ?.split('=')[1],
  set: (key: string, value: string) => (document.cookie = `${key}=${value}`),
});
