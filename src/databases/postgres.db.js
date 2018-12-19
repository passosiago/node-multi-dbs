const InterfaceCrud = require('../base/strategy');

class PostgresDb extends InterfaceCrud{
    constructor(){
        super()
    }
}

module.exports = new PostgresDb();