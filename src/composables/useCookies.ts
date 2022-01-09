export default () => ({
  get: (key: string) =>
    document.cookie
      .split(';')
      .find((cookie) => cookie.startsWith(`${key}=`))
      ?.split('=')[1],
  set: (key: string, value: string) => (document.cookie = `${key}=${value}`),
});
