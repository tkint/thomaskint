import axios from 'axios';
import { getSettingValue } from '@/plugins/global';
import SettingsNames from '@/plugins/global/settings-names';

const tkintId = '1729469';
const tkintPath = `/users/${tkintId}`;

// const tkintProjectsPath = `${tkintPath}/projects`;

// const tkintNamespace = 'tkint';
// const lemilliardNamespace = 'lemilliard';
const projectsPath = '/projects';
const projectsSeparator = '%2F';

// const pageSize = '100';
// const perPage = `perPage=${pageSize}`;

// export const projectsName = [
//   `${tkintNamespace}${projectsSeparator}thomaskint`,
//   `${tkintNamespace}${projectsSeparator}pdfedit`,
//   `${tkintNamespace}${projectsSeparator}minidao`,
//   `${tkintNamespace}${projectsSeparator}pipeline`,
//   `${tkintNamespace}${projectsSeparator}wumpus`,
//   `${tkintNamespace}${projectsSeparator}easysoundlab`,
//   `${lemilliardNamespace}${projectsSeparator}kibodb`,
//   `${lemilliardNamespace}${projectsSeparator}kibadmin`,
//   `${lemilliardNamespace}${projectsSeparator}decisiontree`,
//   `${lemilliardNamespace}${projectsSeparator}mapper`,
// ];

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

  getProjects() {
    const projects = [];
    this.projectsName.forEach((projectName) => {
      this.getProject(projectName).then(p => projects.push(p));
    });
    return projects;
  }

  getFullProjectsPromise() {
    const requests = [];
    this.projectsName.forEach((projectName) => {
      requests.push(this.axios.all([
        this.axios.get(GitlabService.getBaseProjectUrl(projectName)),
        this.axios.get(GitlabService.getCommitsUrl(projectName)),
        this.axios.get(GitlabService.getLanguagesUrl(projectName)),
      ]));
    });
    return this.axios.all(requests);
  }

  async getProject(projectName) {
    let project = null;
    await this.axios.all([
      this.axios.get(GitlabService.getBaseProjectUrl(projectName)),
      this.axios.get(GitlabService.getCommitsUrl(projectName)),
      this.axios.get(GitlabService.getLanguagesUrl(projectName)),
    ]).then((responses) => {
      project = GitlabService.buildProject(
        projectName,
        responses[0].data,
        responses[1].headers['x-total'],
        responses[2].data,
      );
    });

    return project;
  }

  static buildProject(fullProjectName, projectBase, commitsCount, languages) {
    const fullProjectNameSplit = fullProjectName.split(projectsSeparator);
    const projectName = fullProjectNameSplit[1];
    return {
      id: projectBase.id,
      name: projectBase.name,
      description: projectBase.description,
      system_name: projectName,
      stars: projectBase.star_count,
      url: projectBase.web_url,
      created: projectBase.created_at,
      updated: projectBase.last_activity_at,
      commits: commitsCount,
      languages,
    };
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
