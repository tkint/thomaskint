export default () => ({
  keys: <T>(object: T): (keyof T)[] => Object.keys(object) as (keyof T)[],
});
