module.exports = function (req, res) {
    let db = require("../models")
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
}
