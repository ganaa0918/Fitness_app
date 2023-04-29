const express = require("express")
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.get('/', (req, res) =>  { 
    res.send('hello');
})

app.listen(PORT , () => { 
    console.log('service running' + PORT )
})