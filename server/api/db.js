import mongodb from 'mongodb'
const MongoClient = mongodb.MongoClient
const task_col_name = "tasks"
const db_name = "test"

if (process.env.NODE_ENV != "production") {
    require('dotenv').config()
}

const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@ntaro-uohel.mongodb.net/${db_name}?retryWrites=true&w=majority`

/*
 * MogoDB validation and setup.
 */
MongoClient.connect(uri, (err, db) => {

    const dbo = db.db(db_name);
    dbo.listCollections().toArray().then((arr) => {
        if (arr.findIndex(({ name }) => name === task_col_name) > -1) {
            console.log(`Collection "${task_col_name}" exists!`);
            db.close()
        } else {
            console.log(`Collection "${task_col_name}" doesn't exists!`);
            dbo.createCollection(task_col_name).then(() => {
                console.log("Collection created");
                db.close()
            })
        }

    });
});

export function addRecord(obj) {
    return new Promise(resolve => {
        MongoClient.connect(uri, (err, db) => {
            const dbo = db.db(db_name);
            const tasks = dbo.collection(task_col_name);
            tasks.insertOne(obj)
            db.close();
            resolve();
            return;
        })
    });
}

export async function getRecords() {
    return new Promise(resolve => {
        MongoClient.connect(uri, (err, db) => {
            db.db("test").collection("tasks").find({}).toArray((err, arr) => {
                if (err) throw err;
                resolve(arr);
                return arr;
            });
        })
    })
}