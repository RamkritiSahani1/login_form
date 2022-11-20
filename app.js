const express= require('express');
const app= express();
const hbs= require('hbs');
const bodyParser = require('body-parser');
const mongoose= require('mongoose');
const mongodb= require('mongodb');
const routes= require('./routes/main');
const Form= require('./models/Form');
const port= process.env.PORT || 9000;



// using a body-parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// using routes
app.use('', routes);

// using static files
app.use('/static' ,express.static("public"));

// use template engine
app.set('view engine', 'hbs');
app.set('views', 'views')
// hbs.registerPartials("folder name")

// connection of database
mongoose.connect('mongodb://localhost:27017/project_1', () => {
    console.log("db connected");
});

app.listen(port, () => {
    console.log(`server started from port number at ${port}`);
});