

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

public getCpf(): string {
  return this.cpf;
}

  public getName(): string {
     return this.name;
  }

  public getAge(): number {
     return this.age;
  }

  public getBalance(): number {
     return this.balance;
  }

  public getTransactions(): Transaction[] {
     return this.transactions;
  }

  public addTransaction(transaction: Transaction): void {
     this.transactions.push(transaction);
  }


  constructor(cpf: string, name: string, age: number) {
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }  


   
class transaction{
  private date: string;
  private value: number;
  private description: string;

  public getDate(): string {
     return this.date;
  }

  public getValue(): number {
     return this.value;
  }

  public getDescription(): string {
     return this.description;
  }
   
   

   class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }

    getAccount = () => {
        return this.accounts
    }

    setAccount = (account: UserAccount[]) => {
        this.accounts = account
    }

}
const newBank = new Bank ([UserAccount1])

  console.log(newBank.getAccount())


  constructor(date: string, value: number, description: string) {
     this.date = date;
     this.value = value;
     this.description = description
  }
}
