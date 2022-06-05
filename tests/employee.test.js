const Employee = require("../lib/employee");


describe("Employee", () => {
  
 
  describe("Employee object instantiation", () => {
    it("Creates an object with name, id, and email properties", () => {
      const employee = new Employee("AJ Jaswal", 1, "example@gmail.com");

      expect(employee).toBeInstanceOf(Employee);
      expect(employee.name).toEqual("AJ Jaswal");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("example@gmail.com");
    });
  });
