var mongoose = require('../Connection/connection.js');
var EmployeeAttendenceSchema = new mongoose.Schema({

Number_Of_Attendence:{
	type: Number
},
Absents:{
	type: Number
},
Informed_Absentees:{
	type: Number
},
Lates:{
	type: Number
},

Informed_Lates:{
	type: Number
},
Casual_Leaves:{
	type: Number
},
Sick_Leaves:{
	type: Number
}

});
var employeeattendence = mongoose.model('Employeeattendences', EmployeeAttendenceSchema);
module.exports = employeeattendence;