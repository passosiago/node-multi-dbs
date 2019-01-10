const strategyContext = require('../src/database/strategies/base/strategyContext');
const mongodb = require('../src/database/strategies/mongo.db');
const postgres = require('../src/database/strategies/postgres.db');

new strategyContext(mongodb).create();
new strategyContext(postgres).create();