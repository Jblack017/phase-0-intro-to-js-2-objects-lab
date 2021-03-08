// Write your solution in this // 

//define an employee varaiable// 
//assign it to an object containing name and streetAddress in literal//
const employee = {
    name: 'Joe',
    streetAddress: 'None'
};

console.log(employee['name']);
console.log(Object.keys(employee));
console.log(Object.values(employee));

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]: value });
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
};

function deleteFromEmployeeByKey(employee, key) {
   const employees = {employee};
    delete employees.key;
    return employees
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee
};
//create function destructivelyDeleteFromEmployeeByKey()
    //4) returns employee without the delete key/value pair
    //5) modifies the original employee