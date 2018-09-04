const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

// Connection URL
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    } console.log('Connected to MongoDB server');
    /*const db = client.db('TodoApp');

    db.collection('Users').insertOne({
        _id: 1,
        name: "Tom Cruise",
        age: 60,
        location: "Hollywood"
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert the user')
        }
    console.log(JSON.stringify(result.ops, undefined,2));

});
    client.close();*/
});