const router = require('express').Router()
const controller = require('../controller/todo.controller')

// Create Todo
router.post('/create',controller.create)

// Read all Todo
router.get('/read',controller.read)

// Update Todo by ID
router.put('/update/:id',controller.update)

// Delete Todo by ID
router.delete('/delete/:id',controller.deleteTodo)

module.exports = router