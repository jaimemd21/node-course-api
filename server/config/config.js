var env = process.env.NODE_ENV || 'development'; //only in heroku, no localy
console.log('env ******', env)

if (env === 'development') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp'; //mongodb://mitocode:123@ds135592.mlab.com:35592/todoapp_mitocode
} else if (env === 'test') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';    
}