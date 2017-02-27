module.exports = function (req, res) {
    let db = require("../models")
    let crypto = require('crypto');
    db.User.findOne({
            where: {
                userName: req.body.userName
            }
        })
        .then(function (result) {
            let salt = result.salt
            let hash = crypto.createHmac('sha256', salt)
                .update(req.body.hashPassword)
                .digest('hex');
            if (hash == result.hashPassword) {
                let jwt = require('jsonwebtoken');
                let token = jwt.sign({
                    userId: result.id,
                    role: result.role
                }, 'privateKey')
                res.send(token)
            } else {
                res.send('Username / password salah')
            }
        })
        .catch(function (err) {
            console.log(err.message);
        })
}
