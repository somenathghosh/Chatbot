"use strict";

const loki = require('lokijs');
const db = new loki('loki.json');

module.exports = {  Pattern: db.addCollection('patttern'),
                    classifier: db.addCollection('classifier')
                  }
