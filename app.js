'use strict';

const express 	= require('express');
const  config 	= require('./config/config');
const  glob 	= require('glob');
//const  mongoose = require('mongoose');
const process = require('process');

//Test
const natural = require('natural');
const stemmer = natural.LancasterStemmer;;

stemmer.attach();
const lda = require('lda');
const sentiment = require('sentiment');

let classifier = require('./app/util/ghobot/engine/ddgn/classifier');
let text = 'I have already registed my email address, why are you asking again?';
console.log(classifier.classify(text));
var documents = text.match( /[^\.!\?]+[\.!\?]+/g );
console.log(lda(documents, 1, 3));
//console.log(sentiment(text));
console.log(text.tokenizeAndStem());

//Test n

try {
  // mongoose.connect(config.db);
  // const db = mongoose.connection;
  // db.on('error', function () {
  //   throw new Error('unable to connect to database at ' + config.db);
  // });
  const models = glob.sync(config.root + '/app/models/*.js');

  models.forEach(function (model) {
    require(model);
  });
}
catch(err){
  console.log(err);
}



const app = express();

module.exports = require('./config/express')(app, config);

process.on('uncaughtException', function (err) {
  console.log(err);
})


app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});
