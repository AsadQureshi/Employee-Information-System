var EmployeeAttendenceSchema = require('../Models/employee_attendence');
// var mongoose = require("mongoose");
exports.viewEmployee_attendence = function(req, res) {
    res.render('employee_attendence.html', {
        layout: false
    });
}
exports.addAttendence = function(req, res) {
    console.log(req.body);
    // var record = new EmployeeAttendenceSchema({
    //     Employee_Id: req.body.Employee_Id,
    //     Number_Of_Attendence: req.body.Number_Of_Attendence,
    //     Absents: req.body.Absents,
    //     Informed_Absentees: req.body.Informed_Absentees,
    //     Lates: req.body.Lates,
    //     Informed_Lates: req.body.Informed_Lates,
    //     Casual_Leaves: req.body.Casual_Leaves,
    //     Sick_Leaves: req.body.Sick_Leaves,
    // });


    // record.save(function(err, doc) { //record.save (callback)
    // 	//function (err, doc)
    //     if (err) {
    //         res.send(err);
    //     } else {
    //         return console.error(err);
    //         console.log('saved : ' + doc);
    //         //console.dir(Asad);
    //         res.send(doc);

    //     }
    // });
    // res.send(req.body);
}
