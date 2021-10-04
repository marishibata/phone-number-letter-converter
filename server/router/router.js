const express = require('express');
const { getPhoneWords } = require('../controllers/controller');
const router = express.Router();

router.get('/number/:numbercombination', getPhoneWords);

module.exports = router;