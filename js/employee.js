class Employee
{
    constructor(memberid)
    {
        this.memberid = memberid;
    }
    set name(name)
    {
        this.name = name;
    }
    set salary(sal)
    {
        this.salary = sal;
    }
    set netsalary(salnet)
    {
        this.netsalary = salnet;
    }
    totalSalary()
    {
        return (this.salary+this.netsalary)*0.9;
    }
    get name()
    {
        return this.name;
    }
    get salary()
    {
        return this.salary;
    }

}
let saurabh = new Employee('1234');
saurabh.name('Saurabh Mishra');
saurabh.salary(33000);
console.log(saurabh.name);