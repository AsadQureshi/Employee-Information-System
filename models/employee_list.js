var mongoose = require('../Connection/connection.js');
var EmployeeListSchema = new mongoose.Schema({

    Name: {
        type: String
    },
    Fathers_Name: {
        type: String
    },
    Address: {
        type: String
    },
    NIC: {
        type: Number
    },
    Email: {
        type: String
    },
    Phone_Number: {
        type: Number
    },
    Mobile_Number: {
        type: Number
    },
    DOB: {
        type: Date
    },
    Marital_Status: {
        type: String
    },
    Next_to_kin: {
        type: String
    },
    ICE: {
        type: Number
    }
});
var employeeList = mongoose.model('Employeelists', EmployeeListSchema);
module.exports = employeeList;
