var express = require('express');
var router = express.Router();
let db = require("../models");

let signUp = require("../helper/signUp")
let signIn = require("../helper/signIn")
let usersGet = require("../helper/usersGet")
let usersGetOne = require("../helper/usersGetOne")
let usersPost = require("../helper/usersPost")
let usersDelete = require("../helper/usersDelete")
let usersPut = require("../helper/usersPut")

// http://localhost:3000/api/signup (POST)
router.post('/signup', signUp);

// http://localhost:3000/api/signin (POST)
router.post('/signin', signIn);

// http://localhost:3000/api/users (GET) (with token)
router.get('/users', usersGet);

// http://localhost:3000/api/users (GET) (with token)
router.get('/users/:userId', usersGetOne);

// http://localhost:3000/api/users (POST) (with token)
router.post('/users', usersPost);

// http://localhost:3000/api/users/2 (DELETE) (with token)
router.delete('/users/:userId', usersDelete);

// http://localhost:3000/api/users/2 (PUT) (with token)
router.put('/users/:userId', usersPut);

module.exports = router;
