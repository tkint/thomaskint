import SettingsData from '@/assets/data/settings.json';
import RouteNames from '@/router/names';
import Icons from './icons';

const globalPlugin = {
  install: (Vue, options) => {
    // Tools
    /**
     * Retrieve routes list from router instance
     * @returns {*}
     */
    const getRoutes = () => {
      if (options.router && options.router.options && options.router.options.routes) {
        return options.router.options.routes;
      }
      return null;
    };
    /**
     *
     * @param routeName
     * @returns {*}
     */
    const getRouteByName = (routeName) => {
      let route = null;
      const routes = getRoutes();
      if (routes) {
        let i = 0;
        while (i < routes.length && !route) {
          if (routes[i].name === routeName) {
            route = routes[i];
          }
          i += 1;
        }
      }
      return route;
    };
    /**
     * Verify if route name exists in the current router instance
     * @param routeName
     * @returns {boolean}
     */
    const routeExists = routeName => getRouteByName(routeName) !== null;
    /**
     * global object
     * Contains global and fields used in the page editor and page display
     * @type {{}}
     */
    const global = { icons: null };
    global.icons = {};
    /**
     * Adding icons
     */
    Object.keys(Icons).forEach((key) => {
      global.icons[key] = Icons[key];
    });
    /**
     * Open a route with the given name
     * @param routeName
     * @param params
     */
    global.openRouteByName = ({ name, params }) => {
      if (routeExists(name)) {
        options.router.push({ name, params });
        return;
      }
      options.router.push({ name: RouteNames.ERROR_404 });
    };
    /**
     * Open a route
     * @param routeName
     * @param params
     */
    global.openRoute = ({ route, params }) => {
      global.openRouteByName({ name: route.name, params });
    };
    global.getRouteByName = getRouteByName;
    /**
     *
     * @param ms
     * @returns {Promise<any>}
     */
    global.sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    global.formatDate = (dateToFormat) => {
      const date = new Date(dateToFormat);
      return date.toLocaleDateString();
    };
    /**
     *
     * @param name
     * @returns {*|number|T}
     */
    global.getSetting = name => SettingsData.find(setting => setting.name === name);
    /**
     *
     * @param name
     * @returns {*|number|T}
     */
    global.getSettingValue = name => global.getSetting(name).value;
    /**
     * Add this plugin to Vue instance
     * @type {{}}
     */
    Vue.prototype.$global = global;
  },
};

export default globalPlugin;
