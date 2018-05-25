'use strict';

const cmd = require('node-cmd');
var exec = require('node-exec-promise').exec;

module.exports = {
  startBrowser : function(url){
    return exec('firefox '+ url);
  },

  stopBrowser : function(){
    return exec('pkill firefox');
  },

  cleanup : function(){
    return exec('rm ~/.mozilla/firefox/*.default/*.sqlite ~/.mozilla/firefox/*default/sessionstore.js')
    .then(function(){
      return exec('rm -r ~/.cache/mozilla/firefox/*.default/*');
    });
  },

  geturl : function (){
    return exec('sqlite3 ~/.mozilla/firefox/*.default/places.sqlite "select url from moz_places order by last_visit_date desc limit 1;" ');
  }
};
