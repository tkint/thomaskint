export default class ArticleService {
  axios = null;

  constructor(axios) {
    this.axios = axios;
  }

  getArticles() {
    return this.axios.get('/article').then(response => response.data);
  }
}
