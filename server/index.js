const express = require("express")
const brfjeiufj = require('body-parser')
const { MongoClient } = require("mongodb");
const app = express()
const PORT = 3000

const uri1 = 'mongodb+srv://tuguldur1202:gunj8878@cluster0.whifwho.mongodb.net/?retryWrites=true&w=majority'
const WorkoutRoute = require('./Routes/LoginRoute')
app.use(WorkoutRoute)
app.use(brfjeiufj.json())


app.post('/', (req, res) =>  { 
    console.log(req.body);
    res.send('hello');
})

app.listen(PORT , () => { 
    console.log('service running' + PORT )
})