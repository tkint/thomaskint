import Types from './types';
import Names from '../names';

function getSettingByName(settings, name) {
  let setting = null;
  let i = 0;
  while (i < settings.length && !setting) {
    if (settings[i].name === name) {
      setting = settings[i];
    }
    i += 1;
  }
  return setting;
}

export default {
  [Types.SET_COMING_SOON](state, settings) {
    state[Names.COMING_SOON] = getSettingByName(settings, Names.COMING_SOON);
  },
  [Types.SET_COMING_SOON_TITLE](state, settings) {
    state[Names.COMING_SOON_TITLE] = getSettingByName(settings, Names.COMING_SOON_TITLE);
  },
  [Types.SET_SITE_TITLE](state, settings) {
    state[Names.SITE_TITLE] = getSettingByName(settings, Names.SITE_TITLE);
  },
  [Types.SET_EMAIL_ADRESS](state, settings) {
    state[Names.EMAIL_ADRESS] = getSettingByName(settings, Names.EMAIL_ADRESS);
  },
  [Types.SET_GITHUB_URL](state, settings) {
    state[Names.GITHUB_URL] = getSettingByName(settings, Names.GITHUB_URL);
  },
  [Types.SET_LINKEDIN_URL](state, settings) {
    state[Names.LINKEDIN_URL] = getSettingByName(settings, Names.LINKEDIN_URL);
  },
};
