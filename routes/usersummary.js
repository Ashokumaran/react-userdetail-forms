var express = require('express');
var router = express.Router();
var {MongoClient,URI,dbname,ObjectId} = require('../config');


/* GET user details. */
router.get('/',async function(req, res) {
    let client;
    try{
      client = await MongoClient.connect(URI, {useUnifiedTopology: true},{ useNewUrlParser: true });
      let db = client.db(dbname);
    let users = await db.collection('users').find().toArray();
    client.close();
    res.json({users})}
    catch(error){
      if(client) client.close();
      console.log(error);
    }
  });

module.exports = router;
