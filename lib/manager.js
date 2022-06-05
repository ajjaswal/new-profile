const Employee = require('./employee');
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOffice() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }

    getID() {
        return this.id;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}
module.exports = Manager;