const express = require('express')
const bodyParser1234 = require('body-parser')
const router = express.Router();
const { MongoClient } = require("mongodb");
const uri = require('../MongodbconnUrl');
router.use(bodyParser1234.json())
const uri1 = 'mongodb+srv://tuguldur1202:gunj8878@cluster0.whifwho.mongodb.net/?retryWrites=true&w=majority'


router.route('/Login').post(function (req, res) {

  async function run() {
    const client = new MongoClient(uri1);
    try {
      console.log(req.body);
      const database = client.db('Fitness');
      const Cus = database.collection('Customer');
      if (req.body.email != null && req.body.password != null) {
        const query = { username: req.body.email };
        console.log(query);
          const Customer = await Cus.findOne(query);
        if(Customer.password === req.body.password ) { 
          res.send( Customer._id);
        } }
      else {
        res.status(404).send(alert('amjiltgui'));
      }
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);

});


module.exports = router