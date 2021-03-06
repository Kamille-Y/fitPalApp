const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;


// this the middleware this allows us to parse Json
app.use(logger('dev'));

app.use(express.urlencoded({ extended: true}));
app.use(cors());
app.use(express.json());

app.use(express.static('public'));


// this connects use to the database
const uri = process.env.ATLAS_URI || 'mongodb://localhost/fitpalapp'
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

const connection = mongoose.connection;
connection.once('open', ()=> {
  
   
    console.log("MongoDB database connection established succesfully") 
  
});

app.use(require('./backend/routes/api.js'));
app.use(require('./backend/routes/view.js'));




    app.listen(port, () => {
            console.log(`Server is running on Port: ${port}`);
        });

