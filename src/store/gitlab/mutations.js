/* eslint-disable no-console */
import Vue from 'vue';
import { keys } from './';
import GitlabService, { projectsName } from '../../services/gitlabService';

const updateProject = (state, project) => {
  const projects = state[keys.PROJECTS];
  let i = 0;
  let found = false;
  while (i < projects.length && !found) {
    if (projects[i].id === project.id) {
      Vue.set(state[keys.PROJECTS], i, project);
      found = true;
    }
    i += 1;
  }
  if (!found) {
    state[keys.PROJECTS].push(project);
  }
};

export const types = {
  ADD_VALUE: 'ADD_VALUE',
  LOAD_PROJECTS: 'LOAD_PROJECTS',
};

export default {
  [types.ADD_VALUE](state, { key, value }) {
    if (state[key] !== undefined) {
      state[key] = value;
    }
  },
  [types.LOAD_PROJECTS](state, projectsPromise) {
    if (state[keys.PROJECTS] !== undefined) {
      projectsPromise.then((responses) => {
        for (let i = 0; i < responses.length; i += 1) {
          const project = GitlabService.buildProject(
            projectsName[i],
            responses[i][0].data,
            responses[i][1].headers['x-total'],
          );
          updateProject(state, project);
        }
      });
    }
  },
};
