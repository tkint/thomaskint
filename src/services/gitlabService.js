/* eslint-disable no-param-reassign */
import axios from 'axios';
import { getSettingValue } from '@/plugins/global';
import SettingsNames from '@/plugins/global/settings-names';

const tkintId = '1729469';
const tkintPath = `/users/${tkintId}`;
const projectsPath = '/projects';
const projectsSeparator = '%2F';

export const setBuffer = (object, key, bufferSize, step, ms) => {
  const loader = setInterval(() => {
    if (object[key] < bufferSize) {
      object[key] += step;
    } else {
      clearInterval(loader);
    }
  }, ms);
};

class GitlabService {
  static instance = null;
  projectsName = [];

  constructor() {
    this.axios = axios;
    this.axios.defaults.baseURL = 'https://gitlab.com/api/v4';
    this.projectsName = GitlabService.getProjectsName();
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new GitlabService();
    }
    return this.instance;
  }

  getUser() {
    return this.axios.get(tkintPath)
      .then(response => response.data);
  }

  getProjectsAsync() {
    const projects = [];
    this.projectsName.forEach(async (projectName) => {
      projects.push(await this.getProjectAsync(projectName));
    });
    return projects;
  }

  getFullProjectsPromise(projects) {
    const requests = [];
    this.projectsName.forEach((projectName) => {
      const project = projects.find(p => p.full_project_name === projectName);
      project.loadingValue = 0;
      project.reloading = true;
      setBuffer(project, 'loadingValue', 100, 5, 250);
      requests.push(this.axios.all([
        this.axios.get(GitlabService.getBaseProjectUrl(projectName)),
        this.axios.get(GitlabService.getCommitsUrl(projectName)),
        this.axios.get(GitlabService.getLanguagesUrl(projectName)),
      ]));
    });
    return this.axios.all(requests);
  }

  async getProjectAsync(projectName) {
    const project = GitlabService.buildEmptyProject(projectName);
    project.system_name = GitlabService.getProjectName(projectName);

    await this.axios.get(GitlabService.getBaseProjectUrl(projectName)).then((response) => {
      const data = response.data;
      if (data) {
        project.id = data.id;
        project.name = data.name;
        project.avatar = data.avatar_url;
        project.description = data.description;
        project.stars = data.star_count;
        project.url = data.web_url;
        project.created = data.created_at;
        project.updated = data.last_activity_at;
        setBuffer(project, 'loadingValue', 50, 5, 250);
      }
    });

    this.axios.get(GitlabService.getCommitsUrl(projectName)).then((response) => {
      const data = response.headers['x-total'];
      if (data) {
        project.commits = data;
        setBuffer(project, 'loadingValue', 75, 5, 250);
      }
    });

    this.axios.get(GitlabService.getLanguagesUrl(projectName)).then((response) => {
      const data = response.data;
      if (data) {
        project.languages = data;
        setBuffer(project, 'loadingValue', 100, 5, 250);
      }
    });

    return project;
  }

  static buildProject(fullProjectName, projectBase, commitsCount, languages) {
    return {
      id: projectBase.id,
      name: projectBase.name,
      avatar: projectBase.avatar_url,
      description: projectBase.description,
      system_name: this.getProjectName(fullProjectName),
      full_project_name: fullProjectName,
      stars: projectBase.star_count,
      url: projectBase.web_url,
      created: projectBase.created_at,
      updated: projectBase.last_activity_at,
      commits: commitsCount,
      languages,
      loadingValue: 0,
      reloading: false,
    };
  }

  static buildEmptyProject(fullProjectName) {
    return {
      id: null,
      name: null,
      avatar: null,
      description: null,
      system_name: null,
      full_project_name: fullProjectName,
      stars: null,
      url: null,
      created: null,
      updated: null,
      commits: null,
      languages: null,
      loadingValue: 0,
      reloading: false,
    };
  }

  static getProjectName(fullProjectName) {
    const fullProjectNameSplit = fullProjectName.split(projectsSeparator);
    return fullProjectNameSplit[1];
  }

  static getBaseProjectUrl(projectName) {
    return `${projectsPath}/${projectName}`;
  }

  static getCommitsUrl(projectName) {
    return `${this.getBaseProjectUrl(projectName)}/repository/commits?per_page=1`;
  }

  static getLanguagesUrl(projectName) {
    return `${this.getBaseProjectUrl(projectName)}/languages`;
  }

  static getProjectsName() {
    const names = [];
    const repositories = getSettingValue(SettingsNames.REPOSITORIES);
    if (repositories) {
      repositories.forEach((repository) => {
        if (repository.account && repository.projects) {
          repository.projects.forEach((project) => {
            names.push(`${repository.account}${projectsSeparator}${project}`);
          });
        }
      });
    }
    return names;
  }
}

export default GitlabService;
