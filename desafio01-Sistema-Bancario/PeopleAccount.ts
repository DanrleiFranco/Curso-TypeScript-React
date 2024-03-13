import {DioAccount} from './DioAccount'

export class PeopleAccount extends DioAccount{
   private doc_id: number
    constructor(doc_id: number, name: String, accountNumber: number){
        super(name, accountNumber);
        this.doc_id = doc_id
    }

    /*deposit = (): void => {
        console.log('pessoas físicas');
    }*/
}


