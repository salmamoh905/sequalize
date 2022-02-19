const express = require ('express');
const app = express();
const PORT = 8000;
const {readdirSync} = require('fs')
app.use(express.json());

const mysql = require('mysql');

//use middleware modules

//routes
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));

//setup database


app.listen (PORT,()=>{
    console.log(`listening on port ${PORT}`);
})
