//const MongoClient = require('mongodb').MongoClient;
//Crea una variable MongoCliente que es llenada de la propiedad MongoClient
const {MongoClient, ObjectID} = require('mongodb');

//var user = {name: 'Jaime', age: 26};
//Crear variables desde propiedades de objetos
//var {name} = user;
//console.log(name);

//si no existe la db, la crea automaticamente!
//Mongo no crea la base si no existe data en el
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');

    //Colecction = Tablas
    //Document = Row/Fila/Registro
    //Field = Columnas
    //Crea las colecciones si no existen
    /*    db.collection('Todos').insertOne({
            text: 'Something to do',
            completed: false
        }, (err, result) => {
            if (err) {
                return console.log('Unable to insert todo', err)
            }
            console.log(JSON.stringify(result.ops, undefined, 2));
        });*/

    //Insert new doc into User (name, age, location)
    /*db.collection('Users').insertOne({        
        name: 'Jaime',
        age: 26,
        location: 'Perú'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err)
        }
        console.log(result.ops[0]._id.getTimestamp());
    });*/

    db.close();
});