import { CompanyAccount } from "./CompanyAccount";
import { DanAccount } from "./DanAccount";
import { PeopleAccount } from "./PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'pessoa física', 111)
console.log(peopleAccount);

const companyAccount: CompanyAccount = new CompanyAccount('pessoa jurídica', 222)
console.log(companyAccount);

const danAccount: DanAccount = new DanAccount ('Danrlei', 305590)
console.log(danAccount);

companyAccount.deposit(150);
companyAccount.saque(100);
companyAccount.getLoan(150);

danAccount.deposit(150)





