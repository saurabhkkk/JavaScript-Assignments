class Account
{
    constructor(name,balance)
    {
        this.name = name;
        this.balance= balance;
    }
    deposit(amount)
    {
        this.balance = this.balance+amount;
    }
}
class Currentaccount extends Account{
    constructor(name,balance)
    {
        super(name,balance);
    }
    withdraw(amount)
    {
        this.balance = this.balance - amount;
    }
    show()
    {
        console.log(this.name + " " + this.balance);
    }
}

var customer1 = new Currentaccount('nisarg',1000);
customer1.show();
customer1.withdraw(500);
customer1.show();
customer1.deposit(1000);
customer1.show();