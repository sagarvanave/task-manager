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

    // Insert one record into database

    // db.collection('users').insertOne({
    //     name:"sagar",
    //     age:24
    // },(error,result) => {
    //     if(error){
    //         return console.log("Unable to insert user")
    //     }
    //     console.log(result.ops)
    // })

    // Insert multiple records into the database

    // db.collection('users').insertMany([
    //     {
    //         name:"Rahul",
    //         age:25
    //     },
    //     {
    //         name:"Pratik",
    //         age:26
    //     }
    //     ],(error,result)=>{
    //         if(error){
    //             return console.log("Unable to insert records")
    //         }
    //         console.log(result.ops)
    //     })


    db.collection('tasks').insertMany([
        {
            description:"Read a book",
            completed:false
        },{
            description:"Charge the mobile",
            completed:true
        },{
            description:"Watch a movie",
            completed:true
        }
    ],(error,result)=>{
        if(error){
            return console.log("Unable to insert records")
        }
        
        console.log(result.ops)
    })
})