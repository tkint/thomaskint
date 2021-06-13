import { reactive } from 'vue';
import Config from '@/models/config';

export interface AppState {
  config: Config
  loading: boolean
}

const state = reactive<AppState>({
  config: Config.load(),
  loading: true,
} as AppState);

const methods = {
  saveConfig: () => state.config && state.config.save(),
  loadConfig: () => state.config = Config.load(),
};

export default {
  state,
  methods,
};
