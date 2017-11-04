export default class SettingService {
  axios = null;

  constructor(axios) {
    this.axios = axios;
  }

  getSettings() {
    return this.axios.get('/setting').then(response => response.data);
  }

  getSettingByName(name) {
    return this.axios.get(`/setting/${name}`).then(response => response.data);
  }
}
