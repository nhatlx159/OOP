export class Account {
    private accountNumber: number = 999999
    private accountName: string = "undefind"
    private balance: number = 50000
    private RATE: number = 0.035
    constructor(accountName: string, accountNumber: number, balance: number) {
        if (accountNumber <= 0) {
            console.log("account number invalid");
        }
        if (accountName == "") {
            console.log("account name invalid");
        }
        if (balance < 50000) {
            console.log("balance invalid");
        }
        this.accountName = accountName
        this.accountNumber = accountNumber
        this.balance = balance
    }
    public deposit(amount: number): boolean {
        if (amount > 0) {
            this.balance = this.balance + amount
            console.log('deposit successfully');
            return true
        }
        console.log('deposit successfully');
        return false
    }
    public withDraw(amount: number, fee: number): boolean {
        if (amount > 0 && amount + fee < this.balance) {
            this.balance = this.balance - (amount + fee)
            console.log('with draw successfully');
            return true
        }
        console.log('with draw failed');
        return false
    }
    public addInterest(): void {
        this.balance = this.balance + (this.balance * this.RATE)
    }
    public transfer(account1: Account, amount: number): boolean {
        if (this.balance - amount >= 0 && amount > 0) {
            this.balance = this.balance - amount
            account1.balance = account1.balance + amount
            return true
        }
        return false
    }
    public getAccountNumber(): number {
        return this.accountNumber
    }
    public getBalance(): number {
        return this.balance
    }
    public toString(): string {
        var x = this.balance.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        return `accountNumber: ${this.accountNumber} accountName: ${this.accountName} balance: ${x}`
    }
}
