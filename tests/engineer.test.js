const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer")

describe("Engineer", () => {
  
  describe("Engineer Object", () => {
    it("Creates name, id, email, and Github properties", () => {
      const engineer = new Engineer("AJ Jaswal;", 1, "example@gmail.com", "examplegit");

      expect(engineer).toBeInstanceOf(Engineer);
      expect(engineer.name).toEqual("AJ Jaswal;");
      expect(engineer.id).toEqual(1);
      expect(engineer.email).toEqual("example@gmail.com");
      expect(engineer.github).toEqual("examplegit"); });
  });

  describe("getName", () => {
    it("Should return the object's name property", () => {
      const engineer = new Engineer("AJ Jaswal;", 1, "example@gmail.com", "examplegit");

      expect(engineer.getName()).toEqual("AJ Jaswal;");});
  });

  describe("getId", () => {
    it("Should return the object's id property", () => {
      const engineer = new Engineer("AJ Jaswal;", 1, "example@gmail.com", "examplegit");

      expect(engineer.getID()).toEqual(1); });
  });

  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const engineer = new Engineer("AJ Jaswal;", 1, "example@gmail.com", "examplegit");

      expect(engineer.getEmail()).toEqual("example@gmail.com");});
  });
  
  describe("getGithub", () => {
    it("Should return the object's Github property", () => {
      const engineer = new Engineer("AJ Jaswal;", 1, "example@gmail.com", "examplegit");

      expect(engineer.getGithub()).toEqual("examplegit");});
  });

  describe("getRole", () => {
    it("Should return the string 'engineer'", () => {
      const engineer = new Engineer("AJ Jaswal;", 1, "example@gmail.com", "examplegit");

      expect(engineer.getRole()).toEqual("Engineer"); });
  });
});