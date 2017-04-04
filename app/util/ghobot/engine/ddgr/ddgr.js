'use strict';

const events = require('events');
//const Pattern = require('./pattern');
const PatternCollection = require('../../../mdb').Pattern;
//const Pfile = require('./pfile');
const winston = require('winston');
const console = {};
console.log = winston.info;

const EventEmitter = require('events').EventEmitter;

let DDGR = (function () {


  class DDGR extends EventEmitter {

     constructor() {
      	super();
      	this.on('error', this.printStack);
      	this.on('data', this.success);
        this.Patterns = [];
      }

      success(data) {
        if(data) console.log('DDG/ddg/success: =====> Got the data at DDGCore');
        else console.log('DDG/ddg/success: =====> There is some problem in getting the data');

      }
      printStack(error){
        console.log(error.stack);
      }

      add (pattern){
        if(pattern) PatternCollection.insert(pattern);
        else  this.emit('error', new Error('DDGG/ddgr/add: ======> No Pattern Provided'));
      }
      getAll (){

        let p = PatternCollection.find({});
        return p;
      }
      get(callback){
        //body implement
      }


  }


  return DDGR;


})();






module.exports = DDGR;
