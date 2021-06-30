const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// this the middleware this allows us to parse Json

app.use(cors());
app.use(express.json());

// this connects use to the database
const uri = process.env.ATLAS_URI || 'mongodb://localhost/fitpalapp'
// mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true})

// const connection = mongoose.connection;
// connection.once('open', ()=> {
//     console.log("MongoDB database connection established succesfully");

// })
//require and use the files 
const connection = mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: True})

const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);

// this allows for us to listen and start server 

// app.listen(port, () => {
//     console.log(`Server is running on Port: ${port}`);
// });

connection.once('open', ()=> {
    console.log("MongoDB Connection established");
    app.listen(port, () => {
            console.log(`Server is running on Port: ${port}`);
        });
})