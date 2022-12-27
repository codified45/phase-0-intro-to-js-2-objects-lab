// Write your solution in this file!
const employee = {
    name: "Jack",
    streetAddress: "45-89 Doyle Lane",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};

    newEmployee[key] = value;

    return newEmployee;
} 

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}


function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};

    delete newEmployee[key];

    return newEmployee;
} 

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}

// updateEmployeeWithKeyAndValue
// const updateEmployee = updateEmployeeWithKeyAndValue(employee, name, value)




// Write your solution in this file!
// const employees = {
//     employee: {
//     name: "Jack",
//     streetAddress: "45-89 Doyle Lane",
//     },
// };

// function updateEmployeeWithKeyAndValue(employees, name, value) {
//     const newEmployees = {...employees};

//     newEmployees.employee.name = value;

//     return newEmployees.employee;
// } 

