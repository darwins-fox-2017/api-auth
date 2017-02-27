'use strict';
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        userName: DataTypes.STRING,
        name: DataTypes.STRING,
        hashPassword: DataTypes.STRING,
        salt: DataTypes.STRING,
        role: DataTypes.STRING
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            }
        },
        hooks: {
            beforeCreate: function (data, options) {
                let crypto = require('crypto');
                //console.log(`ini hasil password ${JSON.stringify(data)}`);

                var salt = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (var i = 0; i < 5; i++) {
                    salt += possible.charAt(Math.floor(Math.random() * possible.length));
                }

                let hash = crypto.createHmac('sha256', salt)
                    .update(data.hashPassword)
                    .digest('hex');

                data.salt = salt;
                data.hashPassword = hash;
            }
        }
    });
    return User;
};
