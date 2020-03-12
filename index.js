const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const path=require('path');

const{ mongoose}=require('./dbconn.js');
var usersController=require('./controller/usersController.js');
var propertyController=require('./controller/propertyController.js');
var artistController=require('./controller/artistController.js');
var clientregistrationcontroller=require('./controller/clientregistrationcontroller.js');
var uploadcontroller=require('./controller/UploadController.js');
var app=express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));


app.listen(3000, ()=>console.log('Server started at:3000'));
app.use('/users',usersController);
app.use('/property',propertyController);
app.use('/artist',artistController);
app.use('/clientregistration',clientregistrationcontroller);
app.use('/uploadimage',uploadcontroller);
app.use('/uploads',express.static(path.join(__dirname,'uploads')));
