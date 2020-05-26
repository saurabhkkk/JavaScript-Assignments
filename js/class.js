class Account
{
    constructor(name,balance)
    {
        this.name = name;
        this.balance = balance;
    }
    deposit(amount)
    {
        this.balance = this.balance+amount;
    }
    display()
    {
        console.log(this.name + ' ' + this.balance);
    }
}

var tony = new Account('Tony',1000);
tony.deposit(500);
tony.display();
var tina = new Account('Tina',2000);
tina.deposit(1000);
tina.display();
console.log(Object.keys(Account));