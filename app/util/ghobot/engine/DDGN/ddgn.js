'use strict';

const events = require('events');
// const PatternCollection = require('../../../mdb');
const winston = require('winston');
const console = {};
console.log = winston.info;
const natural = require('natural');
const stemmer = natural.PorterStemmer;
const classifier = new natural.BayesClassifier();



const EventEmitter = require('events').EventEmitter;

let DDGN = (function () {

  stemmer.attach();

  class DDGN extends EventEmitter {

  }

  return DDGN;

}

module.exports = DDGN;
