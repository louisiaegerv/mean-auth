const bodyParser = require('body-parser')
		, passport = require('passport')
		, mongoose = require('mongoose')
		, express = require('express')
		, path = require('path')
		, cors = require('cors')
		, app = express(),
			config = require('./config/database');

// Connect to DB (START DB w/mongod first!)
mongoose.connect(config.database);
const db = mongoose.connection;

// On connection success
db.on('connected', () => {
	console.log(`Connected to database: ${config.database}`);
});

// On connection error
db.on('error', (err) => {
	console.log(`Database error: ${err}`);
});

// Port Number
const port = process.env.PORT || 3000;

// Custom Routes
const users = require('./routes/users');
const products = require('./routes/products');
const location = require('./routes/location');
const sports = require('./routes/sports');

// CORS Middleware
app.use(cors());

// Body-Parser Middleware
app.use(bodyParser.json());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', users);
app.use('/products', products);
app.use('/location', location);
app.use('/sports', sports);

// Index Route
app.get('/', (req, res) => {
	res.send(`App is not using static files`);
});

// Start Server
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});