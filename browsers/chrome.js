'use strict';

const exec = require('node-exec-promise').exec;

module.exports = {
  startBrowser : function(url){
    return exec('google-chrome '+ url);
  },

  stopBrowser : function(){
    return exec('pkill chrome');
  },

  cleanup : function(){
    return exec('rm ~/.config/google-chrome/Default/')
    .then(function(){
      return exec('rm ~/.cache/google-chrome');
    });
  },

  geturl : function (){
    return exec('cp ~/.config/google-chrome/Default/History ~/history.tmp')
    .then(function(){
      return exec('sqlite3 ~/history.tmp "select url from urls order by last_visit_time desc limit 1;"');
    });
  }
};
