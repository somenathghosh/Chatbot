'use strict';

const natural = require('natural');
const classifier = new natural.BayesClassifier();

classifier.addDocument(['hi','hello','howdy','hey'], 'greet');

classifier.addDocument(['forgot password','lost password','password','retrieve password','passcode'], 'forgot-password');

classifier.addDocument(['forgot user id','lost user id','userid','retrieve user id','user id'], 'forgot-userid');
classifier.addDocument(['register','email','email address','add email'], 'registering-email');


// classifier.addDocument('I forgot my password', 'forgot-password');
// classifier.addDocument('I lost my password', 'forgot-password');
// classifier.addDocument('Can you reset my password', 'forgot-password');
// classifier.addDocument('please reset my password', 'forgot-password');
// classifier.addDocument('I can not recollect my password', 'forgot-password');
// classifier.addDocument('I would like to reset my password', 'forgot-password');

// classifier.addDocument('I forgot my userid', 'forgot-userid');
// classifier.addDocument('I lost my userid', 'forgot-userid');
// classifier.addDocument('Can you find my userid', 'forgot-userid');
// classifier.addDocument('please help me finding my userid ', 'forgot-userid');
// classifier.addDocument('I can not recollect my userid', 'forgot-userid');
// classifier.addDocument('I would like to retrieve my useid', 'forgot-userid');

classifier.addDocument('I have trouble logging in.', 'forgot-userid-or-password');


classifier.addDocument(['bye','talk to you later','ttyl'], 'end');
classifier.addDocument('It was very nice talking to you', 'end');
classifier.addDocument('Thanks for your help', 'end');


classifier.addDocument(['yes','yep','yeah','yeh'], 'positive-redir');

classifier.addDocument(['no','nope','neah','never'], 'negetive-redir');



classifier.train();

module.exports = classifier;
