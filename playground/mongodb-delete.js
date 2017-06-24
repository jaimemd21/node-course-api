const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    /*  db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
              console.log(result);
          }
      );*/
    //deleteOne //Elimina la primera coincidencia
    /*    db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
            console.log(result);
        });*/

    //findOneAndDelete //retorna que valor elimino //primera coincidencia
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // });

    //db.collection('Users').deleteMany({ name: 'Jaime' });
    db.collection('Users').findOneAndDelete({ _id: new ObjectID('594dde4612a4e01158d95b43') }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2))
    });

    // db.close();
});