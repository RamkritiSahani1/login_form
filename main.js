const express= require('express');
const routes= express.Router();
const Form= require('../models/Form');
 
routes.get('/', (req, res) => {
    res.render("index");
});

// process-contact-form
routes.post("/process-contact-form", async (reqest, response) => {
    console.log("form is submitted");
    console.log(reqest.body)
    // save the data to db
try {
    const data = await Form.create(reqest.body)
    console.log(data)
    response.redirect("/")

} catch (e) {
    console.log(e)
    response.redirect("/")
}
});


module.exports= routes;