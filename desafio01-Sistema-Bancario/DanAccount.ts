import {DioAccount} from './DioAccount'

export class DanAccount extends DioAccount{
    constructor (name: String, accountNumber: number){
        super(name, accountNumber);
    }

    deposit = (valDepositado: number): void => {
           const valAcressido = valDepositado + 10;
           console.log('depósico acressido: ', valAcressido);
    }
}