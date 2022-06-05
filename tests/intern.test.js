const Employee = require("../lib/employee");
const Intern = require("../lib/intern")

describe("Intern", () => {
  
  describe("Intern Object", () => {
    it("Creates name, id, email, and school properties", () => {
      const intern = new Intern("AJ Jaswal;", 1, "example@gmail.com", "uconn");

      expect(intern).toBeInstanceOf(Intern);
      expect(intern.name).toEqual("AJ Jaswal;");
      expect(intern.id).toEqual(1);
      expect(intern.email).toEqual("example@gmail.com");
      expect(intern.school).toEqual("uconn"); });
  });

  describe("getName", () => {
    it("Should return the object's name property", () => {
      const intern = new Intern("AJ Jaswal;", 1, "example@gmail.com", "uconn");

      expect(intern.getName()).toEqual("AJ Jaswal;");});
  });

  describe("getId", () => {
    it("Should return the object's id property", () => {
      const intern = new Intern("AJ Jaswal;", 1, "example@gmail.com", "uconn");

      expect(intern.getID()).toEqual(1); });
  });

  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const intern = new Intern("AJ Jaswal;", 1, "example@gmail.com", "uconn");

      expect(intern.getEmail()).toEqual("example@gmail.com");});
  });
  
  describe("getGithub", () => {
    it("Should return the object's Github property", () => {
      const intern = new Intern("AJ Jaswal;", 1, "example@gmail.com", "uconn");

      expect(intern.getSchool()).toEqual("uconn");});
  });

  describe("getRole", () => {
    it("Should return the string 'Intern'", () => {
      const intern = new Intern("AJ Jaswal;", 1, "example@gmail.com", "uconn");

      expect(intern.getRole()).toEqual("Intern"); });
  });
});