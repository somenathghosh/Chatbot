'use strict';

const Node = require('./nnode');
const ClassifierCollection = require('../../../mdb').Classifier;

module.exports = (function(){

  const node = new Node({
    "classifier":"forgot_password",
    "actionKey": "response",
    "actionValue":"so, did you mean to reset password?",
    "callback":function(matches,cb) { 'use strict'; console.log(matches); cb(false,'',[])},
    "description":"Say 'Yes' to confirm that reset password request.",
    "context": 0,
    "dsl": 1,
    "suggestion":['Yes', 'No']

  })
  .right({

    "classifier":"positive_redirect",
    "actionKey": "response",
    "actionValue":"Thanks for confirming. For verification,what is your user id?",
    "callback":function(matches,cb) { 'use strict'; console.log(matches); cb(false,'',[])},
    "description":"Say 'My user id is' to provide your user id",
    "context": 0,
    "dsl": 2,
    "suggestion":['My user id is']

  })
  .left({

    "classifier":"negative_redirect",
    "actionKey": "response",
    "actionValue":"okay, how can I help you?",
    "callback":function(matches,cb) { 'use strict'; console.log(matches); cb(false,'',[])},
    "description":"Say 'My user id is' to provide your user id",
    "context": 0,
    "dsl": 2,
    "suggestion":['I forgot my passoword', 'I forgot my user id']

  });


});
