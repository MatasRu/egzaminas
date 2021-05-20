const express = require('express')
const router = express.Router()
const controller = require('../controllers/main')
const middle = require(`../middleware/middle`)

router.post('/createUser', middle, controller.createUser)
router.post('/editUser', middle, controller.editUser)
router.get('/getUsers', (req, res) => controller.getUsers(req, res))
router.get('/deleteUser/:key', (req, res) => controller.deleteUser(req, res))

module.exports = router