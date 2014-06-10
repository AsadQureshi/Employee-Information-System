var mongoose = require('../Connection/connection.js');
var EmployeeDetailsSchema = new mongoose.Schema({

Employee_Name:{
	type: String
},
Job_Title:{
	type: String
},
Department:{
	type: String
},
Hire_Date:{
	type: Date
},

Category:{
	type: String
},
Bank_Account_Number:{
	type: Number
}

});
var employeedetail = mongoose.model('Employeedetails', EmployeeDetailsSchema);
module.exports = employeedetail;
