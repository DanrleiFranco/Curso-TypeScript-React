export abstract class DioAccount{
    private readonly name: String;
    private readonly accountNumber: number; 
    private saldo: number = 0;
    private status: boolean = true;

    constructor(name: String, accountNumber: number){
        this.name = name;
        this.accountNumber = accountNumber;
    }

    deposit = (valorDepositado: number): void => {
        this.saldo += valorDepositado;
        console.log('Depósito realizado. Saldo atual:', this.saldo);   
    }

    saque = (valorSaqui: number): void => {
        if(this.status && this.saldo >= valorSaqui){
            this.saldo -= valorSaqui
            console.log('valor do saldo com saque: ', this.saldo);
        } else{
            console.log('saldo insuficiente ou conta inválida !');
        }
    }

    getSaldo = (): number =>{
        return this.saldo;
    }

    getStatus = (): boolean =>{
        return this.status;
    }

    /*private validateStatus = (): boolean =>{
        if(this.status){
            return this.status;
        }
        throw new Error('conta invávilda');
    }*/
}
