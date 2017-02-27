module.exports = function (req, res) {
    let jwt = require('jsonwebtoken');
    let db = require("../models");
    let decode = jwt.verify(req.headers.authorization, 'privateKey')
    if (decode.role == 'admin') {
        db.User.create({
                userName: req.body.userName,
                name: req.body.name,
                hashPassword: req.body.hashPassword,
                role: req.body.role
            })
            .then(function (task) {
                console.log('oke coy');
            })
            .catch(function (err) {
                console.log(err.message);
            })
    } else {
        res.send('Acess denied')
    }
}
