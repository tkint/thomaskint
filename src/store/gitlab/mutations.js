import Vue from 'vue';
import { keys } from './';
import GitlabService, { infosFile } from '../../services/gitlabService';

const updateProject = (state, project) => {
  const projects = state[keys.PROJECTS];
  let i = 0;
  let found = false;
  while (i < projects.length && !found) {
    if (projects[i].id === project.id) {
      project.loadingValue = 100;
      project.reloading = false;
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
      projectsPromise.then(async (responses) => {
        responses.forEach(async (response, i) => {
          const projectName = GitlabService.getInstance().projectsName[i];
          let infos = {};
          let data = response[1].data;
          if (data && data.find(item => item.name === infosFile)) {
            await GitlabService.getInstance().getAxios()
              .get(GitlabService.getInfosUrl(projectName))
              .then((subResponse) => {
                data = subResponse.data;
                if (data) {
                  infos = data;
                }
              });
          }
          const project = GitlabService.buildProject(
            projectName,
            response[0].data,
            infos,
            response[2].headers['x-total'],
            response[3].data,
          );
          updateProject(state, project);
        });
      });
    }
  },
};
