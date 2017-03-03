const express = require('express')
		, router = express.Router();

router.get('/', (req, res, next) => {
	res.send('PRODUCTS INDEX');
});

router.get('/add', (req, res, next) => {
	res.send('ADD PRODUCT');
});

router.get('/update', (req, res, next) => {
	res.send('UPDATE PRODUCT');
});

router.get('/delete', (req, res, next) => {
	res.send('DELETE PRODUCT');
});

module.exports = router;