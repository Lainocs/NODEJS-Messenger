const express = require('express')
const route = express.Router()

const services = require('../services/render')
const UserController = require('../controllers/UserController')
const MessageController = require('../controllers/MessageController')

/**
 * @description: Home page
 * @method: GET /
 */
route.get('/', services.messagesRoutes)
route.post('/', UserController.currentUser)

route.get('/login', services.loginRoutes)
route.post('/login', UserController.verifyLogin)

/**
 * @description: Add User
 * @method: GET /add-user
 */
// Admin
route.get('/admin/add-user', services.addUserRoutes)

/**
 * @description: Update User
 * @method: GET /update-user
 */
route.get('/admin/update-user', services.updateUserRoutes)

route.get('/admin', services.homeRoutes)

// User
route.post('/api/users', UserController.create)
route.get('/api/users', UserController.find)
route.put('/api/users/:id', UserController.update)
route.delete('/api/users/:id', UserController.delete)

// Message
route.post('/api/messages', MessageController.create)



module.exports = route