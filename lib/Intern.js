// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee"); 

class Intern extends Employee {
    constructor(name, id, email, school) {
        if(!school) {
            throw new Error ("Must enter a school name.")
        }
        super(name, id, email);
        this.school = school;
    }

    printEmployee();
}

module.exports = Intern; 