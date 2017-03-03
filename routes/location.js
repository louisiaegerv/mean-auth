let express = require('express')
	, router = express.Router();

router.get('/', (req, res, next) => {
	res.send("LOCATION INDEX");
});

router.get('/country', (req, res, next) => {
	res.send('LOCATION -> COUNTRY');
});

router.get('/country/state', (req, res, next) => {
	res.send('LOCATION -> COUNTRY -> STATE');
});

router.get('/country/state/city', (req, res, next)=> {
	res.send('LOCATION -> COUNTRY -> STATE -> CITY');
});

module.exports = router;