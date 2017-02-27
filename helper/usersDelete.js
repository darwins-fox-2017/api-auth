module.exports = function (req, res) {
    let db = require('../models')
    let jwt = require('jsonwebtoken');
    let decode = jwt.verify(req.headers.authorization, 'privateKey')
    if (decode.role == 'admin') {
        db.User.findById(req.params.userId)
            .then(function (result) {
                return result.destroy()
                    .then(function () {
                        res.send(result)
                    })
            })
    } else {
        res.send('Acess denied')
    }
}
