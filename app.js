var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
var employee_details = require('./routes/employee_details');
var employee_list = require('./routes/employee_list');
var employee_salary_details = require('./routes/employee_salary_details');
var employee_attendence = require('./routes/employee_attendence');
var cons = require('consolidate');

var app = express();

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*routes*/
app.get('/view/attendence', employee_attendence.viewEmployee_attendence);
app.post('/attendence/add', employee_attendence.addAttendence);

module.exports = app;
app.listen(4000, function() {
    console.log('message:"Server is live and Ready" ')
});
