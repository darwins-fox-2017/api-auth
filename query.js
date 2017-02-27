let db = require('./models')

// sequelize model:create --name User --attributes 'userName:string, name:string, hashPassword:string, salt:string, role:string'

db.User.create({
        userName: 'endy',
        name: 'endy',
        hashPassword: 'bukabuka',
        role: 'admin'
    })
    .then(function (task) {
        console.log('oke coy');
    })
    .catch(function (err) {
        console.log(err.message);
    })

let jwt = require('jsonwebtoken');
let token = jwt.sign({
    foo: 'kucing'
}, 'privateKey')
console.log(token);

var decoded = jwt.verify(token, 'privateKey');
console.log(decoded.foo) // bar
