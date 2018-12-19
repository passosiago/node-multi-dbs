const InterfaceCrud = require('../base/strategy');

class MongoDb extends InterfaceCrud{
    constructor(){
        super()
    }

    create(item){
        console.log('criado');
    }
}

module.exports = new MongoDb();