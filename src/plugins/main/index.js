import Icons from './icons';

const globalPlugin = {
  install(Vue, options) {
    /**
     * global object
     * Contains global and fields used in the page editor and page display
     * @type {{}}
     */
    const global = {};
    global.icons = {};
    /**
     * Adding icons
     */
    Object.keys(Icons).forEach((key) => {
      global.icons[key] = Icons[key];
    });
    /**
     * Method to open a route
     * @param route
     */
    global.openRoute = (route) => {
      options.router.push({ name: route });
    };
    // Adding the global object in Vue
    Vue.prototype.$global = global;
  },
};

export default globalPlugin;
