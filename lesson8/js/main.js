class Worker {
    firstName = 'Ivan';
    lastName = 'Chaplinskyi';
    rate = 1000;
    hours = 160;
    overtime = 170;

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    };

    get salary() {
        return this.rate * this.hours;
    };
};

class SoftwareEngineer extends Worker {
    position = 'Junior';
    role = 'Fullstack';
    skills = ['React JS', 'Node JS'];

    get bonusCoefficient() {
       return 1.2 + 0.4;
    };

    get bonus() {
        return this.overtime * (this.rate * 2) * this.bonusCoefficient;
    };

    get fullSalary() {
        return this.salary + this.bonus;
    };

    static getFullInfo() {
        return (
            alert(super.fullName)
            );
    };
};

SoftwareEngineer.getFullInfo();

console.log(new SoftwareEngineer)