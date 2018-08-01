import data from '../assets/data/resume.json';

export default class SettingService {
  constructor() {
    this.data = data;
  }

  getResume() {
    return this.data;
  }
}
