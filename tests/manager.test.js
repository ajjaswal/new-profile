const Employee = require("../lib/employee");
const Manager = require("../lib/manager");

describe("Manager", () => {
  
  describe("Manager object", () => {
    it("Creates name, id, email, and officeNumber properties", () => {
      const manager = new Manager("AJ Jaswal;", 1, "example@gmail.com", 1112223333);

      expect(manager).toBeInstanceOf(Manager);
      expect(manager.name).toEqual("AJ Jaswal;");
      expect(manager.id).toEqual(1);
      expect(manager.email).toEqual("example@gmail.com");
      expect(manager.officeNumber).toEqual(1112223333); });
  });

  describe("getName", () => {
    it("Should return the name property", () => {
      const manager = new Manager("AJ Jaswal;", 1, "example@gmail.com", 1112223333);

      expect(manager.getName()).toEqual("AJ Jaswal;");});
  });

  describe("getId", () => {
    it("Should return the id property", () => {
      const manager = new Manager("AJ Jaswal;", 1, "example@gmail.com", 1112223333);

      expect(manager.getID()).toEqual(1); });
  });

  describe("getEmail", () => {
    it("Should return the email property", () => {
      const manager = new Manager("AJ Jaswal;", 1, "example@gmail.com", 1112223333);

      expect(manager.getEmail()).toEqual("example@gmail.com");});
  });
  
  describe("getOffice", () => {
    it("Should return the officeNumber property", () => {
      const manager = new Manager("AJ Jaswal;", 1, "example@gmail.com", 1112223333);

      expect(manager.getOffice()).toEqual(1112223333);});
  });

  describe("getRole", () => {
    it("Should return the string 'Manager'", () => {
      const manager = new Manager("AJ Jaswal;", 1, "example@gmail.com", 1112223333);

      expect(manager.getRole()).toEqual("Manager"); });
  });
});