export default () => ({
  capitalize: (text: string) => `${text.charAt(0).toUpperCase()}${text.substring(1).toLowerCase()}`,
});
