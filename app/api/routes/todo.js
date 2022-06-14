const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller')

router.post('/', todoController.create)
router.get('/', todoController.getAll)
router.put('/', todoController.updateById);
router.delete('/', todoController.deleteById);

module.exports = router;