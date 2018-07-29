import SettingsService from './settings/setting';
import ArticleService from './article';
import ResumeService from './resume';

export default {
  settings: new SettingsService(),
  article: new ArticleService(),
  resume: new ResumeService(),
};
