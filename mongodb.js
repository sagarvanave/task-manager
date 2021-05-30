//Basic CRUD check

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if(error){
        return console.log("Unable to connect database")
    }
    console.log("Connected correctly!")

    const db = client.db(databaseName)

    db.collection('users').insertOne({
        name:"sagar",
        age:24
    })

})