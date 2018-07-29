import data from '../../../static/data/settings.json';

export default class SettingService {
  constructor() {
    this.data = data;
  }

  getSettings() {
    return this.data;
  }

  getSetting(name) {
    return this.data.find(item => item.name === name);
  }

  getSettingValue(name) {
    return this.getSetting(name).value;
  }
}
