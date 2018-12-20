const InterfaceDb = require('../strategies/interface/interfaceDb');

class MongoDb extends InterfaceDb{
    constructor(){
        super()
    }

    create(item){
        console.log('criado');
    }
}

module.exports = new MongoDb();