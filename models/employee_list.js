var mongoose = require('../connection/connection.js');
var employee_listSchema = new mongoose.Schema({

Name:{
	type: String
},
Fathers Name:{
	type: String
},
Address:{
	type: String
},
NIC:{
	type: Number
},

Email:{
	type: String
},
Phone_Number:{
	type: Number
},
Mobile_Number:{
	type: Number
},
D.O.B :{
	type: Date
},
Marital Status:{
	type: String
},
Next to kin:{
	type: String
},

ICE:{
	type: Number
},




});
var employee_list = mongoose.model('Employee_list', Employee_listSchema);
module.exports = employee_list;
