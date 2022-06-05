const Employee = require("../lib/employee");

test("creates an employee section", () => {
    const employee = new Employee("AJ", 2, "jaswalaj22@mail.com");
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toContain("@"); 
    expect(employee.idNumber).toEqual(expect.any(Number));
    
  });