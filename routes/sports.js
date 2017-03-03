let express = require('express')
	, router = express.Router();

router.get('/', (req, res, next) => {
	res.send('SPORTS INDEX');
});

router.get('/team', (req, res, next) => {
	res.send('SPORT -> TEAM');
});

router.get('/team/player', (req, res, next) => {
	res.send('SPORT -> TEAM -> PLAYER');
});

module.exports = router;
