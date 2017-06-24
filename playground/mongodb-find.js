const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');

    /*   db.collection('Todos').find({
           _id : new ObjectID('594ddaccdc445240ba8d3bab')
       }).toArray().then((docs) => {
           console.log('Todos');
           console.log(JSON.stringify(docs, undefined, 2));
       }, (err) => {
           console.log('Unable to fetch todos', err)
       });*/

    //el then() como promise es opcional
    /*  db.collection('Todos').find().count().then((count) => {
          console.log(`Todos count: ${count}`);
      }, (err) => {
          console.log('Unable to fetch todos', err)
      });*/

    db.collection('Users').find({
        name: 'Jaime'
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err)
    });

    // db.close();
});