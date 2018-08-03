import Axios from 'axios';

class GitlabService {
  constructor() {
    this.axios = new Axios();
    this.axios.defaults.url = 'https://gitlab.com/api/v4';
  }

  getUser() {
    return this.axios.get('/users/1729469').then(response => response.data);
  }
}

export default new GitlabService();
