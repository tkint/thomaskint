/**
 * Désactive les console.log dans les tests
 * Mais laisse les autres méthodes dispos
 */
// @ts-ignore
global.console = {
  log: jest.fn(),

  error: console.error,
  warn: console.warn,
  info: console.info,
  debug: console.debug,
};

class LocalStorageMock implements Storage {
  store: Map<string, string> = new Map();

  clear(): void {
    this.length = 0;
    this.store.clear();
  }

  getItem(key: string): string | null {
    return this.store.get(key) || null;
  }

  key(index: number): string | null {
    return Array.from(this.store.values())[index] || null;
  }

  removeItem(key: string): void {
    this.store.delete(key);
  }

  setItem(key: string, value: string): void {
    this.store.set(key, value);
  }

  length: number = 0;
}

global.localStorage = new LocalStorageMock();
