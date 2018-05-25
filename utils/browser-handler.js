'use strict';

const chromeBrowser = require('../browsers/chrome.js');
const firefoxBrowser= require('../browsers/firefox.js');

module.exports = {
  getBrowser : function(browserName){
    if(browserName == 'chrome'){
      return chromeBrowser;
    } else if (browserName == 'firefox'){
      return firefoxBrowser;
    } else {
      throw new Error('Invalid browser');
    }
  }
};
