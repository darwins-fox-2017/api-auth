module.exports = function (req, res) {
    let db = require("../models")
    let jwt = require('jsonwebtoken');
    let decode = jwt.verify(req.headers.authorization, 'privateKey')
    if (decode.role) {
        db.User.findById(req.params.userId)
            .then(function (result) {
                result.update({
                        name: req.body.name,
                        role: req.body.role
                    })
                    .then(function () {
                        console.log(`data sudah dirubah`);
                    })
            })
    } else {
        res.send('Acess denied')
    }
}
