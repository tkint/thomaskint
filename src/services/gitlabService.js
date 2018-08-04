import axios from 'axios';

const tkintId = '1729469';
const tkintPath = `/users/${tkintId}`;
// const tkintProjectsPath = `${tkintPath}/projects`;

const tkintName = 'tkint';
const tkintNamespace = `${tkintName}`;
const projectsPath = '/projects';
const projectsSeparator = '%2F';

// const pageSize = '100';
// const perPage = `perPage=${pageSize}`;

export const projectsName = [
  'thomaskint',
  'pdfedit',
  'minidao',
  'pipeline',
  'wumpus',
];

class GitlabService {
  constructor(state) {
    this.state = state;
    this.axios = axios;
    this.axios.defaults.baseURL = 'https://gitlab.com/api/v4';
  }

  getUser() {
    return this.axios.get(tkintPath)
      .then(response => response.data);
  }

  getProjects() {
    const projects = [];
    projectsName.forEach((projectName) => {
      this.getProject(projectName).then(p => projects.push(p));
    });
    return projects;
  }

  async getProject(projectName) {
    const baseUrl = `${projectsPath}/${tkintNamespace}${projectsSeparator}${projectName}`;

    const projectBase = await this.axios.get(baseUrl)
      .then(response => response.data);

    const commitsUrl = `${baseUrl}/repository/commits?per_page=1`;
    const projectCommitsCount = await this.axios.get(commitsUrl)
      .then(response => response.headers['x-total']);

    return {
      id: projectBase.id,
      name: projectBase.name,
      description: projectBase.description,
      system_name: projectName,
      stars: projectBase.star_count,
      url: projectBase.web_url,
      created: projectBase.created_at,
      updated: projectBase.last_activity_at,
      commits: projectCommitsCount,
    };
  }
}

export default GitlabService;
