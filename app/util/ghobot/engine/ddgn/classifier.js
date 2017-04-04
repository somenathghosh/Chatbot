'use strict';

const natural = require('natural');
const classifier = new natural.BayesClassifier();

classifier.addDocument(['hi','hello','howdy','hey'], 'greet');

classifier.addDocument(['how are you','how do you do','how is the thing at your end'], 'intro');


classifier.addDocument('I forgot my password', 'forgot-password');
classifier.addDocument('I lost my password', 'forgot-password');
classifier.addDocument('Can you reset my password', 'forgot-password');
classifier.addDocument('please reset my password', 'forgot-password');
classifier.addDocument('I am not able to login using my password', 'forgot-password');
classifier.addDocument('I can not recollect my password', 'forgot-password');
classifier.addDocument('I would like to reset my password', 'forgot-password');

classifier.addDocument('I forgot my userid', 'forgot-userid');
classifier.addDocument('I lost my userid', 'forgot-userid');
classifier.addDocument('Can you find my userid', 'forgot-userid');
classifier.addDocument('please help me finding my userid ', 'forgot-userid');
classifier.addDocument('I am not able to login using my userid', 'forgot-userid');
classifier.addDocument('I can not recollect my userid', 'forgot-userid');
classifier.addDocument('I would like to retrieve my useid', 'forgot-userid');

classifier.addDocument('I have trouble logging in.', 'forgot-userid-or-password');


classifier.addDocument(['bye','talk to you later','ttyl'], 'end');
classifier.addDocument('It was very nice talking to you', 'end');
classifier.addDocument('Thanks for your help', 'end');


classifier.addDocument(['yes','yep','yeah','yeh'], 'positive-redir');

classifier.addDocument(['no','nope','neah','never'], 'negetive-redir');



classifier.train();

module.exports = classifier;
