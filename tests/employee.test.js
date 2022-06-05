const Employee = require("../lib/employee");

describe("Employee", () => {
  
  describe("Employee object", () => {
    it("Creates an object with name, id, and email properties", () => {
      const employee = new Employee("AJ Jaswal", 1, "example@gmail.com");
      expect(employee).toBeInstanceOf(Employee);
      expect(employee.name).toEqual("AJ Jaswal");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("example@gmail.com");
    });
  });

  describe("getName", () => {
    it("Should return the object's name property", () => {
      const employee = new Employee("AJ Jaswal", 1, "example@gmail.com");

      expect(employee.getName()).toEqual("AJ Jaswal");});
  });

  describe("getId", () => {
    it("Should return the object's id property", () => {
      const employee = new Employee("AJ Jaswal", 1, "example@gmail.com");

      expect(employee.getID()).toEqual(1);});
  });

  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const employee = new Employee("AJ Jaswal", 1, "example@gmail.com");

      expect(employee.getEmail()).toEqual("example@gmail.com"); });
  });

  describe("getRole", () => {
    it("Should return the string 'Employee'", () => {
      const employee = new Employee("AJ Jaswal", 1, "example@gmail.com");

      expect(employee.getRole()).toEqual("Employee"); });
  });
});