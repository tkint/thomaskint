export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  const defaultScrollBehavior = router.options.scrollBehavior;
  router.options.scrollBehavior = (to, from, savedPosition) => {
    if (window.location.pathname.endsWith('.html')) {
      return null;
    }
    return defaultScrollBehavior(to, from, savedPosition);
  };
}
