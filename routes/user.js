const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/check_auth')
const user = require('../controller/user')
//get users
router.get('/', checkAuth, user.getAll)
//get user
router.get('/:userId', checkAuth, user.get)
//signup
router.post('/signup', user.signup)
//login
router.post('/login', user.login)
//update user
router.patch('/:userId', checkAuth, user.update)
//delete users
router.delete('/', user.deleteAll)
//delete user 
router.delete('/:userId', checkAuth, user.delete)
module.exports = router