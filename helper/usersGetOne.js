module.exports = function (req, res) {
    let jwt = require('jsonwebtoken');
    let db = require("../models");
    let decode = jwt.verify(req.headers.authorization, 'privateKey')
    if (decode.role) {
        db.User.findById(req.params.userId)
            .then(function (result) {
                res.send(result)
            })
    } else {
        res.send('anda tidak berhak melihat halaman ini')
    }
}
