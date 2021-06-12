export default class Config {
  darkMode: boolean = true;

  save() {
    const jsonStr = JSON.stringify(this);
    localStorage.setItem('tk-config', jsonStr);
  }

  static load(): Config {
    const jsonStr = localStorage.getItem('tk-config');
    let config = new Config();
    if (!!jsonStr) {
      const conf = JSON.parse(jsonStr) as Config;
      config.darkMode = conf.darkMode;
    }
    return config;
  }
}
