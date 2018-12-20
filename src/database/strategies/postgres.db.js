const InterfaceDb = require('../strategies/interface/interfaceDb');

class PostgresDb extends InterfaceDb{
    constructor(){
        super()
    }
}

module.exports = new PostgresDb();