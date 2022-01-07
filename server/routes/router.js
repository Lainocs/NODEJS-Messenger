const express = require('express')
const route = express.Router()

const services = require('../services/render')
const controller = require('../controllers/UserController')

/**
 * @description: Home page
 * @method: GET /
 */
route.get('/', services.messagesRoutes)

route.get('/login', services.loginRoutes)
route.post('/login', controller.verifyLogin)

/**
 * @description: Add User
 * @method: GET /add-user
 */
route.get('/admin/add-user', services.addUserRoutes)

/**
 * @description: Update User
 * @method: GET /update-user
 */
route.get('/admin/update-user', services.updateUserRoutes)

route.get('/admin', services.homeRoutes)

// API
route.post('/api/users', controller.create)
route.get('/api/users', controller.find)
route.put('/api/users/:id', controller.update)
route.delete('/api/users/:id', controller.delete)

module.exports = route