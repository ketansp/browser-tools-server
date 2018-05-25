'use strict';

module.exports = {
  validateBrowserName : function(browserName){
    if(browserName !== 'chrome' && browserName !== 'firefox'){
      return new Error('Invalid browser name');
    }
  }
}
