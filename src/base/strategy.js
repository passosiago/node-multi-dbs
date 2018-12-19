class NotImplementedError extends Error {
    constructor(){
        super('Not Implemented Error')
    }
}

class InterfaceCrud extends NotImplementedError{
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
}



module.exports = InterfaceCrud;



