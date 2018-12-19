const InterfaceCrud = require('./../base/strategy');

class StrategyContext extends InterfaceCrud {
    constructor(strategy){
        super()
        this._database = strategy;
    }
    
    create(item) {
        return this._database.create(item);
    }

    read(item){
        return this._database.read(item);
    }

    update(id, item){
        return this._database.update(id, item);
    }

    delete(id){
        return this._database.delete(id);
    }
}

module.exports = StrategyContext;
