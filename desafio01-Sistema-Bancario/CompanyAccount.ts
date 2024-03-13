import {DioAccount} from './DioAccount'

export class CompanyAccount extends DioAccount {
    constructor(name: String, accountNumber: number){
        super(name, accountNumber);
    }

    getLoan = (loan: number): void => {
        if (this.getStatus()) {
            const salAtual = this.getSaldo() + loan // Obtém o saldo atual
            console.log('saldo com empréstimo: ', salAtual);
        } else {
            console.log('Conta inválida para empréstimo.');
        }
        
    }
}


