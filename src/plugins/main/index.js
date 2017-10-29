const mainPlugin = {
  install(Vue, options) {
    /**
     * main object
     * Contains main and fields used in the page editor and page display
     * @type {{}}
     */
    const main = {};
    /**
     * Method to open a route
     * @param route
     */
    main.openRoute = (route) => {
      options.router.push({ name: route });
    };
    // Adding the main object in Vue
    Vue.prototype.$main = main;
  },
};

export default mainPlugin;
