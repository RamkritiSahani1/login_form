const mongoose= require('mongoose');
const Form= mongoose.Schema({
    email: String,
    password: String,
    name: String,
    fatherName: String,
    branch: String,
    year: String,
    section: String,
    roll: String,
    student: String,
    contact1: String,
    contact2: String,
    gaurdian1: String,
    gaurdian2: String,
    address: String
});

module.exports=mongoose.model('form', Form);