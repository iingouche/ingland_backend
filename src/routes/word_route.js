const express = require('express');
const router = express.Router();

const word_controller = require('../controllers/word_controller')

router.get('/words', word_controller.getWords);
router.get('/word/:id', word_controller.getWordById);
router.get ('/', (req,res) => {
    res.send('hello')
})

module.exports = router;
