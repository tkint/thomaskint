import store, { AppState } from '@/store';
import Config from '@/models/config';

describe('Store', () => {
  const configKey = 'tk-config';

  beforeEach(() => {
    localStorage.clear();
  });

  it('initial state', () => {
    const expectedState = {
      config: {
        darkMode: true,
      },
      loading: true,
    } as AppState;

    expect(store.state).toEqual(expectedState);
  });

  it('save config', () => {
    expect(localStorage.getItem(configKey)).toBeNull();

    store.state.config.darkMode = false;
    store.methods.saveConfig();

    const jsonConfig = localStorage.getItem(configKey);
    expect(jsonConfig).not.toBeNull();

    if (jsonConfig) {
      const config = JSON.parse(jsonConfig) as Config;
      expect(config.darkMode).toBe(false);
    }
  });

  it('load config', () => {
    store.state.config.darkMode = false;
    store.methods.saveConfig();

    store.state.config.darkMode = true;
    store.methods.loadConfig();

    expect(store.state.config.darkMode).toBe(false);
  });
});
