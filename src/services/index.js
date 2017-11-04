import Axios from 'axios';
import SettingService from './setting';
import UserService from './user';
import ArticleService from './article';

Axios.defaults.baseURL = 'http://home.thomaskint.com/private/ThomasKintWebServices';
Axios.defaults.headers.Authorization = 'Basic dGtpbnQ6MzYyNjZacnBwYy4';

export default {
  setting: new SettingService(Axios),
  user: new UserService(Axios),
  article: new ArticleService(Axios),
};
