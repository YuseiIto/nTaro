import mongodb from 'mongodb'
const MongoClient = mongodb.MongoClient

if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}

const uri = process.env.MONGODB_URI;


MongoClient.connect(uri, (err, db) => {
    console.log(`Connected successfully to server on ${uri}`)
    db.close()
})