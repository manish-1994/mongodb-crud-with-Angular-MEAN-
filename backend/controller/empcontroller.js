const express = require('express');
const router = express.Router();
const {Employee} = require('../Model/employee');
const objId = require('mongoose').Types.ObjectId;

router.get('/',(req,res) => {
  Employee.find((err,docs) => {
    if (!err){res.send(docs); }
    else{
      console.log('Error in fetching the employees:' +JSON.stringify(err,undefined,2));
    }
  });
});

router.get('/:id',(req,res) => {
  if(!objId.isValid(req.params.id)){
    return res.status(404).send(`No records found with the given id : ${req.params.id}`);
  }
  Employee.findById(req.params.id, (err,doc) => {
    if (!err) {
      res.send(doc);
    }
    else{
      console.log('Error in retrieving the data:' + JSON.stringify(err,undefined,2));
    }
  });
});



router.post('/',(req,res) => {
  const emp = new Employee({
    name:req.body.name,
    position:req.body.position,
    office:req.body.office,
    salary:req.body.salary
  });
  emp.save((err,doc) => {
    if (!err){res.send(doc);}
    else{
      console.log('Error in the Employee save :' +JSON.stringify(err,undefined,2));
    }
  });
});





router.put('/:id',(req,res) => {
  if (!objId.isValid(req.params.id)) {
    return res.status(400).send(`No records found with that id ${req.params.id}`);
  }
  const emp = {
    name:req.body.name,
    position:req.body.position,
    office:req.body.office,
    salary:req.body.salary
  };
  Employee.findByIdAndUpdate(req.params.id,{$set : emp}, {new : true},(err,doc) => {
    if (!err) {
      res.send(doc);
    }
    else{
      console.log('Error in updating the data of the employee' +JSON.stringify(err,undefined,2));
    }
  });
});

router.delete('/:id',(req,res) => {
  if (!objId.isValid(req.params.id)) {
    return res.status(400).send(`No record  with the id is found ${req.params.id}`)
  }
  Employee.findByIdAndRemove(req.params.id,(err,doc) => {
    if (!err) {
      res.send(doc);
    }
    else{
      console.log('Error in deleting the data :' +JSON.stringify(err.undefined,2));
    }
  });
});

module.exports = router;
