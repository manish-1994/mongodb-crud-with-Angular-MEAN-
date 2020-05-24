const express = require('express');
const bodyparser = require('body-parser');
const {mongoose} = require('./db');
const app = express();
const cors = require('cors');
const employeeController = require('./controller/empcontroller');


app.use(cors({origin:'http://localhost:4200'}));
app.use(bodyparser.json());
app.listen(3000 , () => console.log('Server started at port : 3000'));
app.use('/employees',employeeController);

