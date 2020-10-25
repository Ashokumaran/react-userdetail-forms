var express = require('express');
var router = express.Router();
var {MongoClient,uri,dbname,ObjectId} = require('../config');


/* POST user details. */
router.post('/', async function(req, res) {
  let client;
  try {
    client = await MongoClient.connect(uri,{useUnifiedTopology: true},{ useNewUrlParser: true })
    let db = client.db(dbname);
    await db.collection('users').insertOne(req.body);
    client.close();
    res.status(200).json({
      message: `User Registered`
    }) 
  } catch (error) { 
    if(client) client.close();
    console.log(error);
    res.status(500).json({
      messsage:'Oops! :( Something went wrong!'
    })  }
});

module.exports = router;
