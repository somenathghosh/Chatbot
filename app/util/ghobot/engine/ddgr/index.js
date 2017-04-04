'use strict';

const events = require('events');
const EventEmitter = require('events').EventEmitter;
const Pfile = require('./pfile');
const ddgr = Pfile.exec();
const winston = require('winston');
const console = {};
console.log = winston.info;

let Engine = (function () {

	let patterns = ddgr.getAll();

	const _act = (text, callback) => {

		//console.log(patterns);
		let response = null; //if no match, response will be null
		let suggestion = null;
		let matches = null;
		let err = null; //needs to implement error handling
		let data = {};
		data.DefinitionSource = null;
		data.AbstractText = '';
		data.RelatedTopics = new Array();
		let topic = {};
		topic.Result = null;
		topic.FirstURL = null;
		topic.Text = null;

		for (let i = 0; i < patterns.length; i++) {
				let pattern = patterns[i];
				let r = new RegExp(pattern.regexp, "i");
				matches = text.match(r);
				//console.log(matches);
				if (matches) {
					data.DefinitionSource = 'Dic';
					data.AbstractText = '';
					response = pattern.actionValue;
					suggestion = pattern.suggestion;
					if (response !== undefined) {
							for (let j = 1; j < matches.length; j++) {
									response = response.replace("$" + j, matches[j]);
							}
							// topic.Result = response;
							// topic.Text = suggestion;
							// data.RelatedTopics.push(topic);
							//callback(err,data);
					}
					if (pattern.callback instanceof Function) {

							console.log('Calling callback function');
							pattern.callback.call(this,matches, function(pass, text, sugg){
								console.log('calling internal callback()');
								if(pass) {
									topic.Result = text;
									topic.Text = sugg;
									data.RelatedTopics.push(topic);
									console.log(data);
									callback(undefined, data)
								}
								else{
									topic.Result = response;
									topic.Text = suggestion;
									data.RelatedTopics.push(topic);
									console.log(data);
									callback(undefined,data);
								}
							});
					}
					else{
						callback(err,data);
					}
					break;


				}
				else{

				}
		}

		if(!matches) {
			console.log('No Match found');
			callback(err, data);
		}

	}

	const _capability = () => {

		let cap = new Array();

		for(let i=0; i< patterns.length; i++){
			cap.push(patterns[i].description);
		}
		return cap;

	}

	class Engine extends EventEmitter {

   constructor() {
    	super();
    	this.on('error', this.printStack);
    	this.on('data', this.success);
    }

    success(data) {
      if(data) console.log('DDG/ddg/success: =====> Got the data at DDGCore');
      else console.log('DDG/ddg/success: =====> There is some problem in getting the data');

    }
    printStack(error){
      console.log(error.stack);
    }

		interceptor (query){
			return undefined;
		}

		listen (query,callback){
			if(callback) {
				_act(query,callback);
			}
			else{
				throw new Error('no callback provided!');
			}
		}
		capabilities(){
			let cap = _capability();
			return cap;
		}

	}
	return Engine;

})();


module.exports = Engine;


//dummy
// let patterns = ddgr.getAll();
//
// const findUser = (user) => {
//
// 	if(new String().toUpperCase(user) === 'SOMENATH'){
// 		return true;
// 	}
// 	else if (new String().toUpperCase(user) === 'BRANDON') {
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}
//
// }
//
// const resetPassword = (user) => {
// 	if(findUser(user)) return 'AAAA';
// 	else return 'No Password';
// }
//
//
// //dummy end
