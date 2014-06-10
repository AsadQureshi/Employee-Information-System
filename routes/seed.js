var EmployeeListSchema = require('../Models/employee_list');
var EmployeeDetailsSchema = require('../Models/Employee_details');
var EmployeeAttendenceSchema = require('../Models/employee_attendence');
var EmployeeSalaryDetailsSchema = require('../Models/employee_salary_details');
exports.Seed = function(req, res) {
    var list = new EmployeeListSchema({

    	Name: Asad,
Fathers_Name: Abid,
Address:Model Town,
NIC:35202-2342344-9,

Email:adqureshi@gmail.com,
Phone_Number:0423-5880474,
Mobile_Number:03214971187,
DOB : 19-01-1986,
Marital_Status:Married,
Next_to_kin:Mrs Asad,

ICE:03334621364,

        
    });
    list.save(function(err, list) {
         if (err){
        res.send(err);
        }
        else
        	{
        		return console.error(err);
        		console.log('saved : ' + list);
        		
			}
			
    });
}

