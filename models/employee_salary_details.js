var mongoose = require('../Connection/connection.js');
var EmployeeSalaryDetailsSchema = new mongoose.Schema({
    Employee_Name: {
        type: String
    },
    Basic_Salary: {
        type: Number
    },
    Medical: {
        type: Number
    },
    Fuel_Allowance: {
        type: Number
    },

    Cellular_Credits: {
        type: Number
    },

    Travel_Allowance: {
        type: Number
    },

    Daily_Allowance: {
        type: Number
    },
    Other_Allowance: {
        type: Number
    },
    Deduction: {
        type: Number
    }
});
var employeesalarydetail = mongoose.model('Employeesalarydetails', EmployeeSalaryDetailsSchema);
module.exports = employeesalarydetail;
