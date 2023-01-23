// Write your solution in this file!
const employee = {
    name: "John",
    streetAddress: "55th Street",
};

const updateEmployeeWithKeyAndValue = function(employee, key, value){
    const updatedEmployee = {...employee}
    updatedEmployee[key] = value;
    return updatedEmployee;
}

const destructivelyUpdateEmployeeWithKeyAndValue = function(employee, key, value) {
    employee[key] = value;
    return employee;
}

const deleteFromEmployeeByKey = function(employee, key){
    const updatedEmployee = {...employee};
    delete updatedEmployee[key]; 
    return updatedEmployee;
}

const destructivelyDeleteFromEmployeeByKey = function(employee, key){
    delete employee[key];
    return employee;
}
