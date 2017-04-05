'use strict';

const natural = require('natural');
const classifier = new natural.BayesClassifier();

classifier.addDocument(['hi','hello','howdy','hey'], 'greet');

classifier.addDocument(['forgot password','lost password','password','retrieve password','passcode'], 'forgot_password');

classifier.addDocument(['forgot user id','lost user id','userid','retrieve user id','user id'], 'forgot_userid');
classifier.addDocument(['register','email','email address','add email'], 'registering_email');

classifier.addDocument('My user id is','provide_userid');

classifier.addDocument('I have trouble logging in.', 'forgot_userid_password');


classifier.addDocument(['bye','talk to you later','ttyl'], 'end');
classifier.addDocument('It was very nice talking to you', 'end');
classifier.addDocument('Thanks for your help', 'end');


classifier.addDocument(['yes','yep','yeah','yeh'], 'positive_redir');

classifier.addDocument(['no','nope','neah','never'], 'negetive_redir');



classifier.train();

module.exports = classifier;
