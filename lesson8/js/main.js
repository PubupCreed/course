class Worker {
    constructor(firstName, lastName, rate, hours, overtime) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.rate = rate;
        this.hours = hours;
        this.overtime = overtime;
    }
 
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    };

    get salary() {
        return this.rate * this.hours;
    };
};

class SoftwareEngineer extends Worker {
    constructor(
        position,
        role,
        skills,
        firstName, 
        lastName, 
        rate, 
        hours, 
        overtime
    ) {
       super(firstName, lastName, rate, hours, overtime)
       this.position = position;
       this.role = role;
       this.skills = skills;
    }

    static list = {
        Junior: 1.2,
        Middle: 1.5,
        Senior: 1.8,
        Backend: 0.2,
        Frontend: 0.3,
        Fullstack: 0.4
    }

    get bonusCoefficient() {
        SoftwareEngineer.list[this.position] + SoftwareEngineer.list[this.role]
    };

    get bonus() {
        return this.overtime * (this.rate * 2) * this.bonusCoefficient;
    };

    get fullSalary() {
        return this.salary + this.bonus;
    };

    getFullInfo() {
        return Object.keys(this).reduce((obj, key) =>{
            obj[key] = this[key];
            return obj;
        }, {})
    };
};

const developer = new SoftwareEngineer(
    'Junior',
    'Fullstack',
    ['React JS', 'Node JS'],
    'Ivan',
    'Chaplinskyi',
    3,
    170,
    30
)

console.log(developer.fullName)
console.log(developer.salary)
console.log(developer.getFullInfo())