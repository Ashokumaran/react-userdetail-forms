// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const url = "mongodb://localhost:27017";
// const dbname = "userdetails";
// const ObjectId = mongodb.ObjectID;



const uri = process.env.URI||'mongodb://localhost:27017/userdetails';
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dbname = "userdetails";
const ObjectId = mongodb.ObjectID;



module.exports = {mongodb,uri,MongoClient,dbname,ObjectId}
