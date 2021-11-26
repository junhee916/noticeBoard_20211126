const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/check_auth')
const board = require('../controller/board')
// get boards
router.get('/', checkAuth, board.getAll)
// get board
router.get('/:boardId', checkAuth, board.get)
// save board
router.post('/', checkAuth, board.save)
// update board
router.patch('/:boardId', checkAuth, board.update)
// delete boards
router.delete('/', checkAuth, board.deleteAll)
// delete board
router.delete('/:boardId', checkAuth, board.delete)

module.exports = router