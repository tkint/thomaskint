import { ref, reactive, Ref } from 'vue';
import Config from './models/config';

interface AppState {
    config: Config
    loading: Ref<boolean>
}

const state = reactive<AppState>({
    config: Config.load(),
    loading: ref(true),
} as AppState);

const methods = {
    saveConfig: () => state.config && state.config.save(),
    loadConfig: () => state.config = Config.load(),
};

export default {
    state,
    methods,
};
