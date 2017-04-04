'use strict';
const events = require('events');
const EventEmitter = require('events').EventEmitter;
const winston = require('winston');
const console = {};
console.log = winston.info;

let Engine = (function () {

  class Engine extends EventEmitter{

  }

  return Engine;

}

module.exports = Engine;
