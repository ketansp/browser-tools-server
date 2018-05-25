'use strict';

module.exports = {
  validateBrowserName : function(browserName){
    if(browserName !== 'chrome' && browserName !== 'firefox'){
      throw new Error('Invalid browser name');
    }
  }
}
