const express = require("express")
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000
const {mongoUrl} = require('./keys')
const WorkoutRoute = require("")
app.use(WorkoutRoute)
app.use(bodyParser.json())
app.get('/', (req, res) =>  { 
    res.send('hello');
})

app.listen(PORT , () => { 
    console.log('service running' + PORT )
})