/* eslint-disable no-console */
import { keys } from './';
import { types as MutationsTypes } from './mutations';
import GitlabService from '../../services/gitlabService';

const isValidRecall = (state, key) => !(state[key] && (Date.now() < state[key] + 60000));

const updateValue = (commit, key, value, timerKey) => {
  commit(MutationsTypes.ADD_VALUE, { key, value });
  commit(MutationsTypes.ADD_VALUE, { key: timerKey, value: Date.now() });
};

export const types = {
  RETRIEVE_USER: 'RETRIEVE_USER',
  RETRIEVE_PROJECTS: 'RETRIEVE_PROJECTS',
};

export default {
  [types.RETRIEVE_USER]({ commit, state }) {
    if (isValidRecall(state, keys.USER_LAST_CALL)) {
      const user = GitlabService.getInstance().getUser();
      updateValue(commit, keys.USER, user, keys.USER_LAST_CALL);
    }
  },
  [types.RETRIEVE_PROJECTS]({ commit, state }) {
    if (isValidRecall(state, keys.PROJECTS_LAST_CALL)) {
      if (state[keys.PROJECTS] && state[keys.PROJECTS].length > 0) {
        const projectsPromise = GitlabService
          .getInstance()
          .getFullProjectsPromise(state[keys.PROJECTS]);
        commit(MutationsTypes.LOAD_PROJECTS, projectsPromise);
        commit(MutationsTypes.ADD_VALUE, { key: keys.PROJECTS_LAST_CALL, value: Date.now() });
      } else {
        const projects = GitlabService
          .getInstance()
          .getProjectsAsync();
        commit(MutationsTypes.ADD_VALUE, { key: keys.PROJECTS, value: projects });
        commit(MutationsTypes.ADD_VALUE, { key: keys.PROJECTS_LAST_CALL, value: Date.now() });
      }
    }
  },
};
