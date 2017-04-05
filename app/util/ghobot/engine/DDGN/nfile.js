'use strict';

const Node = require('./nnode');
const ClassifierCollection = require('../../../mdb').Classifier;

module.exports = (function(){

  const node = new Node({
    "classifier":"forgot_password",
    "actionValue":"so, did you mean to reset password?",
    "callback":function(matches,cb) { 'use strict'; console.log(matches); cb(false,'',[])},
    "description":"Say 'Yes' to confirm that reset password request.",
    "context": 0,
    "dsl": 1,
    "suggestion":['Yes', 'No'],

  })
  .right({

    "classifier":"positive_redir",
    "actionValue":"Thanks for confirming. For verification,what is your user id?",
    "callback":function(matches,cb) { 'use strict'; console.log(matches); cb(false,'',[])},
    "description":"Say 'My user id is' to provide your user id",
    "context": 0,
    "dsl": 2,
    "suggestion":['My user id is']

  })
  .left({

    "classifier":"negative_redir",
    "actionValue":"okay, how can I help you?",
    "callback":function(matches,cb) { 'use strict'; console.log(matches); cb(false,'',[])}, //reset to begining.
    "description":"Say 'My user id is' to provide your user id.",
    "context": 0,
    "dsl": 3,
    "suggestion":['I forgot my passoword', 'I forgot my user id', 'I would like to get connected to a representitive']

  })
  .next(1) //dsl 2
  .right({

    "classifier":"provide_userid",
    "actionValue":"Thanks for your input, just for confirmation, your user id is",
    "callback":function(matches,cb) { 'use strict'; console.log(matches); cb(false,'',[])},
    "description":"Say 'My user id is' to provide your user id",
    "context": 0,
    "dsl": 4,
    "suggestion":['Yes', 'No']

  })
  .next(1)
  .right({

  })
  .



});
