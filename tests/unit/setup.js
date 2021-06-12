/**
 * Désactive les console.log dans les tests
 * Mais laisse les autres méthodes dispos
 */
global.console = {
  log: jest.fn(),

  error: console.error,
  warn: console.warn,
  info: console.info,
  debug: console.debug,
};
