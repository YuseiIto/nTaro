'use strict';
import mongodb from 'mongodb'
const MongoClient = mongodb.MongoClient
const ObjectId = mongodb.ObjectId
const task_col_name = "tasks"
const ids_col_name = "ids"
const db_name = "test"

if (process.env.NODE_ENV != "production") {
    require('dotenv').config()
}

const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@ntaro-uohel.mongodb.net/${db_name}?retryWrites=true&w=majority`

/*
 * MogoDB validation and setup.
 */
MongoClient.connect(uri, (err, db) => {

    const promises = [
        new Promise(resolve => {
            const dbo = db.db(db_name);
            dbo.listCollections().toArray().then((arr) => {
                if (arr.findIndex(({ name }) => name === task_col_name) > -1) {
                    console.log(`Collection "${task_col_name}" exists!`)
                    resolve();
                } else {
                    console.log(`Collection "${task_col_name}" doesn't exists!`)
                    dbo.createCollection(task_col_name).then(() => {
                        console.log("Collection created")
                        resolve();
                    })
                }
            });
        }),

        new Promise(resolve => {
            const dbo = db.db(db_name);
            dbo.listCollections().toArray().then((arr) => {
                if (arr.findIndex(({ name }) => name === ids_col_name) > -1) {
                    console.log(`Collection "${ids_col_name}" exists!`)
                    resolve();
                } else {
                    console.log(`Collection "${ids_col_name}" doesn't exists!`)
                    dbo.createCollection(ids_col_name).then(() => {
                        console.log("Collection created")
                        resolve();
                    })
                }

            });
        })
    ];

    Promise.all(promises).then(() => {
        db.close()
    }).catch(function(reason) {
        console.log(reason)
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
            db.db("test").collection(task_col_name).find({}).toArray((err, arr) => {
                if (err) throw err;
                resolve(arr);
                return arr;
            });
        })
    })
}

export function deleteRecord(id) {
    return new Promise(resolve => {
        MongoClient.connect(uri, (err, db) => {
            db.db("test").collection(task_col_name).deleteOne({ _id: ObjectId(id) }, function(err, obj) {
                console.log("deleted:" + id)
                resolve();
                return;
            })

        })
    })
}

export function addUid(uid) {
    return new Promise(resolve => {
        MongoClient.connect(uri, (err, db) => {
            const dbo = db.db(db_name);
            const uids = dbo.collection(ids_col_name);
            uids.insertOne({ "id": uid })
            db.close();
            resolve();
            return;
        })
    });
}

export function isRegisterd(uid) {
    return new Promise(resolve => {
        MongoClient.connect(uri, (err, db) => {
            db.db("test").collection(ids_col_name).find({ "id": uid }).toArray((err, arr) => {
                if (err) throw err;
                const res = (arr.length > 0) ? true : false
                resolve(res);
                return arr;
            });
        })
    })
}

export function registerId(uid) {
    return new Promise(resolve => {
        isRegisterd(uid).then((res) => {

            if (res) {
                resolve();
            } else {
                addUid(uid).then(() => {
                    resolve();
                })
            }
        })
    })
}