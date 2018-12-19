const strategyContext = require('./base/strategyContext');
const mongodb = require('./databases/mongo.db');

new strategyContext(mongodb).create();
