export default class ArticleService {
  axios = null;

  constructor(axios) {
    this.folder = axios;
  }

  getArticles() {
    return this.axios.get('/article').then(response => response.data);
  }
}
