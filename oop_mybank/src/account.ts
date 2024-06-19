export class BankAccount {
    private accountNumber: number;
    private balance: number;
  
    constructor(accountNumber: number, initialBalance: number = 0) {
      this.accountNumber = accountNumber;
      this.balance = initialBalance;
    }
  
    public deposit(amount: number): void {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }
  
    public withdraw(amount: number): void {
      if (amount > this.balance) {
        console.log('Insufficient funds.');
      } else {
        this.balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
      }
    }
  
    public getBalance(): number {
      return this.balance;
    }
  
    public getAccountNumber(): number {
      return this.accountNumber;
    }
  }
  