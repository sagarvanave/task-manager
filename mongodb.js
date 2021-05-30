//Basic CRUD check

//Object destructing

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log("Unable to connect database")
    }
    console.log("Connected correctly!")

    const db = client.db(databaseName)


    db.collection('tasks').findOne({ _id:new ObjectID('60b37561bfe06720631bf105')},(error,task)=>{
        if(error){
            return console.log('Unable to fetch')
        }
        console.log(task.description)
    })

    db.collection('tasks').findOne({ completed:false},(error,task)=>{
        if(error){
            return console.log('Unable to fetch')
        }
        console.log(task.description)
    })
})