'use strict';

const express = require('express');
const app = express();
const browserHandler = require('./utils/browser-handler');
const validationHandler = require('./utils/validations');

app.post('/start', function(req, res){
  validationHandler.validateBrowserName(req.query['browser']);
  browserHandler.getBrowser(req.query['browser']).startBrowser(req.query['url'])
  .then(function(){
    res.send('ok');
  })
  .catch(function(error){
    res.status(400).send(error);
  });
});

app.put('/stop', function(req, res){
  validationHandler.validateBrowserName(req.query['browser']);
  browserHandler.getBrowser(req.query['browser']).stopBrowser()
  .then(function(){
    res.send('ok');
  })
  .catch(function(error){
    res.status(400).send(error);
  });
});

app.delete('/cleanup', function(req, res){
  validationHandler.validateBrowserName(req.query['browser']);
  browserHandler.getBrowser(req.query['browser']).cleanup()
  .then(function(){
    res.send('ok');
  })
  .catch(function(error){
    res.status(400).send(error);
  });
});

app.get('/geturl', function(req, res){
  validationHandler.validateBrowserName(req.query['browser']);
  browserHandler.getBrowser(req.query['browser']).geturl()
  .then(function(data){
    console.log(data)
    res.send(data['stdout']);
  })
  .catch(function(error){
    res.status(400).send(error);
  });
});

app.listen(3000, function(){
  console.log('Browser tools server now started on port 3000');
});
