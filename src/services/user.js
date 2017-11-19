export default class UserService {
  axios = null;

  constructor(axios) {
    this.axios = axios;
  }

  getUsers() {
    return this.axios.get('/user').then(response => response.data);
  }

  getUserByIdUser(id) {
    return this.axios.get(`/user/${id}`).then(response => response.data);
  }

  signin(user) {
    return this.axios.post('/user/signin', user).then(response => response.data);
  }

  signup(user) {
    return this.axios.post('/user/signup', user).then(response => response.data);
  }
}
