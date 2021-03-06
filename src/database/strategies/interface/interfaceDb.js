class NotImplementedError extends Error {
    constructor(){
        super('Not Implemented Error')
    }
}

class InterfaceDb extends NotImplementedError{
    constructor(){
        super()
    }

    create(item) {
        throw new NotImplementedError;
    }

    read(){
        throw new NotImplementedError;
    }

    update(id, item){
        throw new NotImplementedError;
    }

    delete(id){
        throw new NotImplementedError;
    }
    
    isConnected(){
        throw new NotImplementedError;
    }
}



module.exports = InterfaceDb;



