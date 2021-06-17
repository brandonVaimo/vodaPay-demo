const utilsInterface = require("../utils/utils");
const env = require("../../.env.json");

let queryInterface, url, isGraphAllowed;

Page({
  onLoad(query) {
      const fromVersion = env.MAGENTO_VERSION;
      const toVersion = env.GRAPH_CUTOFF;

      if (utilsInterface.isGraphAllowed(fromVersion, toVersion)) {
        isGraphAllowed = true;
        url = env.GRAPH_URL;
        queryInterface = require("../interface/graphInterface");
      } else {
        isGraphAllowed = false;
        url = env.REST_URL;
        queryInterface = require("../interface/restInterface");
      }
  },
  onReady() {
    if (isGraphAllowed) {
      utilsInterface.sendQuery('POST', url, queryInterface.getCurrenciesQuery())
      .then(response => {
        console.log(response);
      });
    } else {
      utilsInterface.initialiseMagentoToken(env, url).then(response => {
        console.log(response);
      });
    }
  },
  onShow() {
  },
  onHide() {
  },
  onUnload() {
  },
  onTitleClick() {
  },
  onPullDownRefresh() {
  },
  onReachBottom() {
  },
  onShareAppMessage() {
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
